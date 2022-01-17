import { City } from '../enums/City.enum';
import { OrderStatus } from '../enums/OrderStatus.enum';
import { Customer } from './Customer';
import { Product } from './Product';

export interface Order {
  id: number;
  price: number;
  city: City;
  address: string;
  products: Product[];
  customer: Customer;
  orderStatus: OrderStatus;
}
