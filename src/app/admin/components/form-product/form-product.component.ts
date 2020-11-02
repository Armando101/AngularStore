import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { ProductsService } from '@core/services/products/products.service';
import { CategoriesService } from '@core/services/products/categories.service';
import { MyValidators } from 'src/app/utils/validators';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '@core/models/category.model';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  public form: FormGroup;
  public image$: Observable<any>;
  public categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
    private categoryService: CategoriesService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getCategories();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      category_id: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      stock: [4, Validators.required]
    });
    this.form.get('stock').valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
        .subscribe(() => this.router.navigate(['./products']));
    }
  }

  get priceField(): AbstractControl {
    return this.form.get('price');
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get descriptionField(): AbstractControl {
    return this.form.get('description');
  }

  get imageField(): AbstractControl {
    return this.form.get('image');
  }

  get category_idField(): AbstractControl {
    return this.form.get('category_id');
  }

  get stockField(): AbstractControl {
    return this.form.get('stock');
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    const dir = `images/${file.name}`;
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

  private getCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
