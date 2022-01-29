import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'https://localhost:44338/api/Product/';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + 'GetProducts');
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + 'GetProduct/' + id);
  }
  createProduct(product: Product): Observable<any> {
    return this.http.post<Product>(this.apiUrl + 'CreateProduct', product);
  }
  editProduct(product: Product): Observable<any> {
    return this.http.put<Product>(
      this.apiUrl + 'EditProduct/' + product.id,
      product
    );
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(this.apiUrl + 'DeleteProduct/' + id);
  }
}
