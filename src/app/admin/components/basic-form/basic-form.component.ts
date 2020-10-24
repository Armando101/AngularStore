import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  public nameField = new FormControl('');
  public emailField = new FormControl('');
  public phoneField = new FormControl('');
  public colorField = new FormControl('');
  public dateField = new FormControl('');
  public numberField = new FormControl('');
  public radioField = new FormControl('');
  public urlField = new FormControl('');
  public searchField = new FormControl('');

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
