import { Gender } from '../enums/Gender.enum';
import { Order } from './Order';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  phoneNo: string;
  email: string;
  orders: Order[];
}
