import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addCartProduct: EventEmitter<string> = new EventEmitter();

  public today = new Date();

  addCart(): void {
    console.log('Agregar al carrito');
    this.addCartProduct.emit(this.product.id);
  }
}
