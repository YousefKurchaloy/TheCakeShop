import { City } from '../enums/City.enum';
import { OrderStatus } from '../enums/OrderStatus.enum';

export interface Order {
  id: number;
  price: number;
  city: City;
  address: string;
  // products: Product[];
  // customer: Customer;
  orderStatus: OrderStatus;
}
