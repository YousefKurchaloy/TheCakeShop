import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private orderSvc: OrderService) {}

  orders!: Order[];

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.orderSvc.getOrders().subscribe((orderFromServer) => {
      this.orders = orderFromServer;
    });
  }
}
