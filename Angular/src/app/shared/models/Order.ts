import { City } from '../enums/City.enum';
import { OrderStatus } from '../enums/OrderStatus.enum';
import { Customer } from './Customer';
import { Product } from './Product';

export interface Order {
  id: number;
  price: number;
  orderTime: Date;
  city: City;
  address: string;
  products: Product[];
  customer: Customer;
  customerId?: number;
  orderStatus: OrderStatus;
}
