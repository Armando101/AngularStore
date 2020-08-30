import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addCartProduct: EventEmitter<string> = new EventEmitter();

  public today = new Date();

  constructor(
    private cartService: CartService
  ) {}

  addCart(): void {
    // this.addCartProduct.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
