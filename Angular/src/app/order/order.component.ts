import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { City } from '../shared/enums/City.enum';
import { OrderStatus } from '../shared/enums/OrderStatus.enum';
import { Order } from '../shared/models/Order';
import { OrderDeleteDialogComponent } from './order-delete-dialog/order-delete-dialog.component';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders!: Order[];
  orderStatus = OrderStatus;
  city = City;
  showSpinner: boolean = true;

  constructor(private orderSvc: OrderService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getOrders();
  }
  deleteOrder(id: number): void {
    const dialogRef = this.dialog.open(OrderDeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.orderSvc.deleteOrder(id).subscribe(
          (res) => {
            this.getOrders();
          },
          (err) => {
            console.error;
          }
        );
      }
    });
  }

  //#region Private Functions

  private getOrders(): void {
    this.orderSvc.getOrders().subscribe((ordersFromServer) => {
      this.orders = ordersFromServer;
      this.showSpinner = false;
    });
  }

  //#endregion
}
