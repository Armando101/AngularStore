import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { CategoriesService } from '@core/services/products/categories.service';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MyValidators } from '@utils/validators';
import { Category } from '@core/models/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  set category(data: Category) {
    if (data) {
      this.isNew = false;
      this.form.patchValue(data);
    }
  }
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();

  public form: FormGroup;
  public image$: Observable<string>;
  public isNew = true;

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private categoriesService: CategoriesService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
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
      if (this.isNew) {
        this.create.emit(this.form.value);
      } else {
        this.update.emit(this.form.value);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  uploadImage(event): void {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    fileInput.click();
  }

}
