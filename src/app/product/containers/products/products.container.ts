import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

  public products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  clickProduct(id: number): void {
    console.log(id);
  }

  fetchProduct(): void {
    this.productsService.getAllProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }
}
