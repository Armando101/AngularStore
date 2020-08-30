import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$.pipe(map((products: Product[]) => {
      console.log(products);
      const distintos = [... new Set(products)];
      console.log(distintos);
      return distintos;
    }));
  }

}
