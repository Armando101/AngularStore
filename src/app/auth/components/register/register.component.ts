import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  showCompany = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), MyValidators.validPassword]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      companyName: ['', Validators.required],
      type: ['company', [Validators.required]],
    }, {
      validators: MyValidators.matchPasswords
    });
    this.typeField.valueChanges.subscribe(value => {
      if (value === 'company') {
        this.companyNameField.setValidators([Validators.required]);
        this.showCompany = true;
      } else {
        this.companyNameField.setValidators(null);
        this.showCompany = false;
      }
      this.companyNameField.updateValueAndValidity();
    });
  }

  get TypeFieldAsForm(): AbstractControl {
    return this.typeField as FormControl;
  }

  get typeField(): AbstractControl {
    return this.form.get('type');
  }

  get companyNameField(): AbstractControl {
    return this.form.get('companyName');
  }
}
