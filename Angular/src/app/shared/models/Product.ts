import { Ingredient } from './Ingredient';
import { Order } from './Order';

export interface Product {
  id: number;
  name: string;
  description: string;
  productPrice: number;
  picUrl: string;
  ingredients: Ingredient[];
  orders: Order[];
}
