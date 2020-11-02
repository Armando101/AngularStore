import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Category } from '@core/models/category.model';
import Availability from '@core/models/Availability.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.url_api_forms}/categories`);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.url_api_forms}/categories/${id}`);
  }

  createCategory(data: Partial<Category>): Observable<Category>  {
    return this.http.post<Category>(`${environment.url_api_forms}/categories`, data);
  }

  updateCategory(id: string, data: Partial<Category>): Observable<Category>  {
    return this.http.put<Category>(`${environment.url_api_forms}/categories/${id}`, data);
  }

  checkCategory(name: string): Observable<Availability> {
    return this.http.post<Availability>(`${environment.url_api_forms}/categories/availability`, {name});
  }
}
