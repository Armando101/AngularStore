import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Product[];
  public displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id)
      .subscribe(response => {
        this. products = this.products.filter(product => product.id !== id);
      });
  }
}
