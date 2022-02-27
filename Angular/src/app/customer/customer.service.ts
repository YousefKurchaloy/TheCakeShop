import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../shared/models/Customer';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl: string = 'https://localhost:44338/api/Customer/';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl + 'GetCustomers');
  }
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + 'GetCustomer/' + id);
  }
  createCustomer(customer: Customer): Observable<any> {
    return this.http.post<Customer>(this.apiUrl + 'CreateCustomer', customer);
  }
  editCustomer(customer: Customer): Observable<any> {
    return this.http.put<Customer>(
      this.apiUrl + 'EditCustomer/' + customer.id,
      customer
    );
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<Customer>(this.apiUrl + 'DeleteCustomer/' + id);
  }
  getCustomerOrderHistory(id: number) {
    return this.http.get<Order[]>(
      this.apiUrl + 'GetCustomerOrderHistory/' + id
    );
  }
}
