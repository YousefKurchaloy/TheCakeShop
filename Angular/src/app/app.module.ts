import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, OrderComponent, CustomerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
