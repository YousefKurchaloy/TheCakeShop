import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl: string = 'https://localhost:44338/api/Order/';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + 'GetOrders');
  }
  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(this.apiUrl + 'GetOrder/' + id);
  }
  createOrder(order: Order): Observable<any> {
    return this.http.post<Order>(this.apiUrl + 'CreateOrder', order);
  }
  editOrder(order: Order): Observable<any> {
    return this.http.put<Order>(this.apiUrl + 'EditOrder/' + order.id, order);
  }
  deleteOrder(id: number): Observable<any> {
    return this.http.delete<Order>(this.apiUrl + 'DeleteOrder/' + id);
  }
}
