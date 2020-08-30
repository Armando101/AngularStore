import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
