import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddEditComponent } from './customer/customer-add-edit/customer-add-edit.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/add', component: CustomerAddEditComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'customers/edit/:id', component: CustomerAddEditComponent },

  { path: 'orders', component: OrderComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
