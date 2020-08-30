import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '222',
      title: 'My product',
      image: 'assets/images/banner-1.png',
      price: 300,
      description: 'New Product'
    };

    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct(id: string): void {
    const newProduct = {};
    this.productsService.updateProduct(id, newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }
}
