import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  // La estructura de un form control es:
  // Valor por defecto, validaciones sincronas, validaciones asincronas
  // public nameField = new FormControl('Valor por defecto', [Validaciones sincronas], [Validaciones asincronas]);

  public nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  public emailField = new FormControl('');
  public phoneField = new FormControl('');
  public colorField = new FormControl('');
  public dateField = new FormControl('');
  public numberField = new FormControl('');
  public radioField = new FormControl('');
  public urlField = new FormControl('');
  public searchField = new FormControl('');

  public categoryField = new FormControl('category-2');
  public tagField = new FormControl('');

  public agreedField = new FormControl(false);
  public genderField = new FormControl();
  public zoneField = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getNameValue(): void {
    console.log(this.nameField.value);
  }

}
