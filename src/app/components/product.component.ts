import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: Product;
    @Output() addCartProduct: EventEmitter<string> = new EventEmitter();

    addCart(): void {
        console.log('Agregar al carrito');
        this.addCartProduct.emit(this.product.id);
    }
}
