import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '@core/services/products/categories.service';
import { Category } from '@core/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.getCategory(params.id);
      }
    });
  }

  public createCategory(data): void {
    this.categoriesService.createCategory(data)
    .subscribe(() => {
      this.router.navigate(['./admin/categories']);
    });
  }

  public updateCategory(data): void {
    this.categoriesService.updateCategory(this.category._id, data)
    .subscribe(() => {
      this.router.navigate(['./admin/categories']);
    });
  }

  public getCategory(id: string): void {
    this.categoriesService.getCategory(id)
    .subscribe(data => {
      console.log(data);
      this.category = data;
    });
  }

}
