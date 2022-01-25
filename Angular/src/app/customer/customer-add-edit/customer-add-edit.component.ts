import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageMode } from 'src/app/shared/enums/PageMode';
import { Customer } from 'src/app/shared/models/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.css'],
})
export class CustomerAddEditComponent implements OnInit {
  pageModeEnum = PageMode;

  customerId: number = 0;
  pageMode: PageMode = PageMode.Create;

  customerForm = this.fb.group({
    id: [0],
    firstName: ['', Validators.required],
    lastName: [''],
    gender: ['', Validators.required],
    phoneNo: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private customerSvc: CustomerService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setPageMode();
    if (this.pageMode == PageMode.Edit) {
      this.preparePageForEdit();
    }
  }

  addEditCustomer(): void {
    if (this.customerForm.valid) {
      const customer: Customer = this.customerForm.value;

      if (this.pageMode == PageMode.Create) {
        this.customerSvc.createCustomer(customer).subscribe((res) => {
          this.router.navigate(['/customers']);
        });
      } else {
        this.customerSvc.editCustomer(customer).subscribe((res) => {
          this.router.navigate(['/customers']);
        });
      }
    }
  }

  //#region Private functions

  private setPageMode() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.customerId = Number(this.route.snapshot.paramMap.get('id'));
      this.pageMode = PageMode.Edit;
    }
  }

  private preparePageForEdit(): void {
    this.customerSvc
      .getCustomer(this.customerId)
      .subscribe((customerFromServer) => {
        this.customerForm.patchValue({
          id: customerFromServer.id,
          firstName: customerFromServer.firstName,
          lastName: customerFromServer.lastName,
          gender: customerFromServer.gender,
          phoneNo: customerFromServer.phoneNo,
          email: customerFromServer.email,
        });
      });
  }
  //#endregion
}
