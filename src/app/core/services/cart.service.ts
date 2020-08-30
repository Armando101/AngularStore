import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  public cart$ = this.cart.asObservable();

  constructor() { }

  public addCart(product: Product): void {
    //  this.products = [...this.products, product];
    this.products.push(product);
    this.cart.next(this.products);
  }
}
