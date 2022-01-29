import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAddEditComponent } from './customer/customer-add-edit/customer-add-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CustomerDeleteDialogComponent } from './customer/customer-delete-dialog/customer-delete-dialog.component';
import { ProductComponent } from './product/product.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { OrderAddEditComponent } from './order/order-add-edit/order-add-edit.component';
import { OrderDeleteDialogComponent } from './order/order-delete-dialog/order-delete-dialog.component';
import { ProductDeleteDialogComponent } from './product/product-delete-dialog/product-delete-dialog.component';
import { ProductAddEditComponent } from './product/product-add-edit/product-add-edit.component';
import { IngredientAddEditComponent } from './ingredient/ingredient-add-edit/ingredient-add-edit.component';
import { IngredientDeleteDialogComponent } from './ingredient/ingredient-delete-dialog/ingredient-delete-dialog.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
