import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/models/Customer';
import { Order } from 'src/app/shared/models/Order';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.css'],
})
export class CustomerOrderHistoryComponent implements OnInit {
  orders!: Order[];
  showSpinner: boolean = true;

  constructor(
    private customerSvc: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var customerId = Number(this.route.snapshot.paramMap.get('id'));

    this.customerSvc.getCustomerOrderHistory(customerId).subscribe((res) => {
      this.orders = res;
      this.showSpinner = false;
    });
  }
}
