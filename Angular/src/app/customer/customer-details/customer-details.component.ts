import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/models/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  customer!: Customer;
  showSpinner: boolean = true;

  constructor(
    private customerSvc: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var customerId = Number(this.route.snapshot.paramMap.get('id'));

    this.customerSvc.getCustomer(customerId).subscribe((res) => {
      this.customer = res;
      this.showSpinner = false;
    });
  }
}
