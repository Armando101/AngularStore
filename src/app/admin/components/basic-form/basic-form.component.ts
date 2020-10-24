import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  public form: FormGroup;

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

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

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

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: [''],
      date: [''],
      number: [''],
      radio: [''],
      url: [''],
      search: [''],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],

      category: ['category-2'],
      tag: [''],

      agreed: [false, [Validators.requiredTrue]],
      gender: [],
      zone: []
    });
  }

  save(event): void | boolean {
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return false;
    }
    console.log(this.form.value);
  }

}
