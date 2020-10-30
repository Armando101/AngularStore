import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../core/services/products/categories.service';
import { Observable } from 'rxjs';
import { Category } from '@core/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public data$: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getAllInfo();
  }

  getAllInfo(): void {
    this.data$ = this.categoriesService.getAllCategories();
  }

}
