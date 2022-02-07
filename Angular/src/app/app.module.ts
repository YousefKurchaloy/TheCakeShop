import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddEditComponent } from './customer/customer-add-edit/customer-add-edit.component';
import { HomeComponent } from './home/home.component';
import { CustomerDeleteDialogComponent } from './customer/customer-delete-dialog/customer-delete-dialog.component';
import { ProductComponent } from './product/product.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { OrderAddEditComponent } from './order/order-add-edit/order-add-edit.component';
import { ProductDeleteDialogComponent } from './product/product-delete-dialog/product-delete-dialog.component';
import { OrderDeleteDialogComponent } from './order/order-delete-dialog/order-delete-dialog.component';
import { ProductAddEditComponent } from './product/product-add-edit/product-add-edit.component';
import { IngredientAddEditComponent } from './ingredient/ingredient-add-edit/ingredient-add-edit.component';
import { IngredientDeleteDialogComponent } from './ingredient/ingredient-delete-dialog/ingredient-delete-dialog.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerOrderHistoryComponent } from './customer/customer-order-history/customer-order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CustomerComponent,
    CustomerAddEditComponent,
    HomeComponent,
    CustomerDeleteDialogComponent,
    ProductComponent,
    IngredientComponent,
    OrderAddEditComponent,
    OrderDeleteDialogComponent,
    ProductDeleteDialogComponent,
    ProductAddEditComponent,
    IngredientAddEditComponent,
    IngredientDeleteDialogComponent,
    ScrollToTopComponent,
    OrderDetailsComponent,
    ProductDetailsComponent,
    CustomerDetailsComponent,
    CustomerOrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
