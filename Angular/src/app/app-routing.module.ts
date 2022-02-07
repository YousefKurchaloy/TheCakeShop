import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddEditComponent } from './customer/customer-add-edit/customer-add-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { OrderAddEditComponent } from './order/order-add-edit/order-add-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductAddEditComponent } from './product/product-add-edit/product-add-edit.component';
import { IngredientAddEditComponent } from './ingredient/ingredient-add-edit/ingredient-add-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/add', component: CustomerAddEditComponent },
  { path: 'customers/edit/:id', component: CustomerAddEditComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },

  { path: 'orders', component: OrderComponent },
  { path: 'orders/add', component: OrderAddEditComponent },
  { path: 'orders/edit/:id', component: OrderAddEditComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },

  { path: 'products', component: ProductComponent },
  { path: 'products/add', component: ProductAddEditComponent },
  { path: 'products/edit/:id', component: ProductAddEditComponent },
  { path: 'products/:id', component: ProductDetailsComponent },

  { path: 'ingredients', component: IngredientComponent },
  { path: 'ingredients/add', component: IngredientAddEditComponent },
  { path: 'ingredients/edit/:id', component: IngredientAddEditComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
