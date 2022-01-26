import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/shared/enums/City.enum';
import { OrderStatus } from 'src/app/shared/enums/OrderStatus.enum';
import { PageMode } from 'src/app/shared/enums/PageMode';
import { Order } from 'src/app/shared/models/Order';
import { OrderDeleteDialogComponent } from '../order-delete-dialog/order-delete-dialog.component';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-add-edit',
  templateUrl: './order-add-edit.component.html',
  styleUrls: ['./order-add-edit.component.css'],
})
export class OrderAddEditComponent implements OnInit {
  pageModeEnum = PageMode;
  orderId: number = 0;
  pageMode: PageMode = PageMode.Create;
  orderForm = this.fb.group({
    id: [0],
    price: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    orderStatus: ['Making', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private orderSvc: OrderService
  ) {}

  ngOnInit(): void {
    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.preparePageForEditMode();
    }
  }

  addEditOrder(): void {
    if (this.orderForm.valid) {
      const order: Order = this.orderForm.value;

      if (this.pageMode == PageMode.Create) {
        this.orderSvc.createOrder(order).subscribe((res) => {
          this.router.navigate(['/orders']);
        });
      } else {
        this.orderSvc.editOrder(order).subscribe((res) => {
          this.router.navigate(['/orders']);
        });
      }
    }
  }

  //#region Private functions

  preparePageForEditMode() {
    this.orderSvc.getOrder(this.orderId).subscribe((orderFromServer) => {
      this.orderForm.patchValue({
        id: orderFromServer.id,
        price: orderFromServer.price,
        city: orderFromServer.city,
        address: orderFromServer.address,
        orderStatus: orderFromServer.orderStatus,
      });
    });
  }

  private setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.orderId = Number(this.route.snapshot.paramMap.get('id'));
      this.pageMode = PageMode.Edit;
    }
  }

  //#endregion
}
