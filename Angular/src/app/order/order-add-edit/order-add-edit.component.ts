import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';
import { ProductService } from 'src/app/product/product.service';
import { PageMode } from 'src/app/shared/enums/PageMode';
import { Customer } from 'src/app/shared/models/Customer';
import { Order } from 'src/app/shared/models/Order';
import { Product } from 'src/app/shared/models/Product';
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

  productsLookup!: Product[];
  customersLookup!: Customer[];

  orderForm = this.fb.group({
    id: [0],
    city: ['', Validators.required],
    address: ['', Validators.required],
    orderStatus: ['Making', Validators.required],
    products: ['', Validators.required],
    customerId: [''],
    orderTime: [Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private orderSvc: OrderService,
    private productSvc: ProductService,
    private customerSvc: CustomerService
  ) {}

  ngOnInit(): void {
    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.preparePageForEditMode();
    }

    this.getProducts();
    this.getCustomers();
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

  compareProductsFn(product1: Product, product2: Product): boolean {
    return product1 && product2
      ? product1.id === product2.id
      : product1 === product2;
  }

  //#region Private functions

  preparePageForEditMode() {
    this.orderSvc.getOrder(this.orderId).subscribe((res) => {
      this.orderForm.patchValue({
        id: res.id,
        city: res.city,
        address: res.address,
        orderTime: res.orderTime,
        orderStatus: res.orderStatus,
        customerId: res.customerId,
        products: res.products,
      });
    });
  }

  private setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.orderId = Number(this.route.snapshot.paramMap.get('id'));
      this.pageMode = PageMode.Edit;
    }
  }

  private getProducts() {
    this.productSvc.getProducts().subscribe((res) => {
      this.productsLookup = res;
    });
  }
  private getCustomers() {
    this.customerSvc.getCustomers().subscribe((res) => {
      this.customersLookup = res;
    });
  }

  //#endregion
}
