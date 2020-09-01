import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as Sentry from '@sentry/angular';

import { Product } from '@core/models/product.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError, retry } from 'rxjs/operators';

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.url_api}/products`, product).pipe(
      catchError(error => this.handleError(error))
    );
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<object> {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes).pipe(
      catchError(error => this.handleError(error))
    );
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${environment.url_api}/products/${id}`).pipe(
      catchError(error => this.handleError(error))
      );
  }

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomAFSFSDFASDuser.me/api?results=2')
      .pipe(
        // Hacemos un retry de 3 veces, esto es que hace tres intentos antes de mandar un error
        retry(3),
        catchError(error => this.handleError(error)),
        map((response: any) => response.results as User[])
      );
  }

  getFile(): Observable<string> {
    return this.http.get('assets/files/test.txt', { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    Sentry.captureException(error);
    return throwError('Whoops, something webt wrong');
  }
}
