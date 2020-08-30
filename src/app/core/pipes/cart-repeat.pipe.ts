import { Pipe, PipeTransform } from '@angular/core';

import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Pipe({
  name: 'cartRepeat'
})
export class CartRepeatPipe implements PipeTransform {

  public products: Product[];

  constructor(
    private cartService: CartService
  ) {}

  transform(product: Product, ...args: unknown[]): number {
    let total = 0;
    this.cartService.cart$.subscribe((products: Product[]) => {
      products.forEach((elemento) => {
        // tslint:disable-next-line: no-unused-expression
        (elemento.id === product.id) && (total += 1);
      });
    });
    return total;
  }

}
