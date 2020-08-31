import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(switchMap((params: Params) => this.productsService.getProduct(params.id)));
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

  deleteProduct(id): void {
    this.productsService.deleteProduct(id)
      .subscribe(product => {
        console.log(product);
      });
  }

  getRandomUsers(): void {
    this.productsService.getRandomUsers()
      .subscribe(users => {
        console.log(users);
      });
  }
}
