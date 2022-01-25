import { Component, OnInit } from '@angular/core';
import { Gender } from '../shared/enums/Gender.enum';
import { Customer } from '../shared/models/Customer';
import { CustomerService } from './customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDeleteDialogComponent } from './customer-delete-dialog/customer-delete-dialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers!: Customer[];
  gender = Gender;

  constructor(
    private customerSvc: CustomerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  deleteCustomer(id: number): void {
    const dialogRef = this.dialog.open(CustomerDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.customerSvc.deleteCustomer(id).subscribe(
          (res) => {
            this.getCustomers();
          },
          (err) => {
            console.error;
          }
        );
      }
    });
  }
  //#region Private Functions

  private getCustomers(): void {
    this.customerSvc.getCustomers().subscribe((customerFromServer) => {
      this.customers = customerFromServer;
    });
  }

  //#endregion
}
