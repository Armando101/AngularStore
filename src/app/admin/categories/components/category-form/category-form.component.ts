import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { CategoriesService } from '@core/services/products/categories.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  public form: FormGroup;
  public image$: Observable<any>;
  public categoryId: string;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params.id;
      if (this.categoryId) {
        this.getCategory();
      }
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)], MyValidators.validateCategory(this.categoriesService)],
      image: ['', Validators.required]
    });
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get imageField(): AbstractControl {
    return this.form.get('image');
  }

  uploadFile(event): void {
    const image = event.target.files[0];
    const name = `${image.name}`;
    const ref = this.storage.ref(name);
    const task = this.storage.upload(name, image);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.image$ = ref.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.imageField.setValue(url);
        });
      })
    )
    .subscribe();
  }

  save(): void {
    if (this.form.valid) {
      this.createCategory();
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createCategory(): void {
    const data = this.form.value;
    this.categoriesService.createCategory(data)
    .subscribe(() => {
      this.router.navigate(['./admin/categories']);
    });
  }

  private getCategory(): void {
    this.categoriesService.getCategory(this.categoryId)
    .subscribe(data => {
      console.log(data);
      this.form.patchValue(data);
    });
  }

  uploadImage(event): void {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    fileInput.click();
  }

}
