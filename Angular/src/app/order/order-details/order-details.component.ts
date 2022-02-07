import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/Order';
import { Product } from 'src/app/shared/models/Product';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  order!: Order;

  constructor(private orderSvc: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    var orderId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderSvc.getOrder(orderId).subscribe((res) => {
      this.order = res;
    });
  }
}
