import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl(''),
    date: new FormControl(''),
    number: new FormControl(''),
    radio: new FormControl(''),
    url: new FormControl(''),
    search: new FormControl(''),
    age: new FormControl(''),

    category: new FormControl('category-2'),
    tag: new FormControl(''),

    agreed: new FormControl(false),
    gender: new FormControl(),
    zone: new FormControl()
  });

  // La estructura de un form control es:
  // Valor por defecto, validaciones sincronas, validaciones asincronas
  // public nameField = new FormControl('Valor por defecto', [Validaciones sincronas], [Validaciones asincronas]);

  // public nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  // public emailField = new FormControl('');
  // public phoneField = new FormControl('');
  // public colorField = new FormControl('');
  // public dateField = new FormControl('');
  // public numberField = new FormControl('');
  // public radioField = new FormControl('');
  // public urlField = new FormControl('');
  // public searchField = new FormControl('');

  // public categoryField = new FormControl('category-2');
  // public tagField = new FormControl('');

  // public agreedField = new FormControl(false);
  // public genderField = new FormControl();
  // public zoneField = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue(): void {
    console.log(this.nameField.value);
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get phoneField(): AbstractControl {
    return this.form.get('phone');
  }

  get colorField(): AbstractControl {
    return this.form.get('color');
  }

  get dateField(): AbstractControl {
    return this.form.get('date');
  }

  get ageField(): AbstractControl {
    return this.form.get('age');
  }

  get radioField(): AbstractControl {
    return this.form.get('radio');
  }

  get urlField(): AbstractControl {
    return this.form.get('url');
  }

  get searchField(): AbstractControl {
    return this.form.get('search');
  }

  get categoryField(): AbstractControl {
    return this.form.get('category');
  }

  get tagField(): AbstractControl {
    return this.form.get('tag');
  }

  get agreedField(): AbstractControl {
    return this.form.get('agreed');
  }

  get genderField(): AbstractControl {
    return this.form.get('gender');
  }

  get zoneField(): AbstractControl {
    return this.form.get('zone');
  }

  get isNameFieldValid(): boolean {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid(): boolean {
    return this.nameField.touched && this.nameField.invalid;

  }

  save(event): void | boolean {
    if (this.form.invalid){
      this.form.controls.name.markAsTouched();
      return false;
    }
    console.log(this.form.value);
  }

}
