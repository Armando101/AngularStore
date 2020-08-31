import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<object> {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${environment.url_api}/products/${id}`);
  }
}
