import { Component, OnInit } from '@angular/core';

import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products$: Observable<Product[]>;
  form: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$.pipe(map((products: Product[]) => {
      console.log(products);
      const distintos = [... new Set(products)];
      console.log(distintos);
      return distintos;
    }));
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.array([])
    });
  }

  save(): void {
    console.log(this.form.value);
  }

  addAdressField(): void {
    this.addressField.push(this.createAddressField());
  }

  private createAddressField(): FormGroup {
    return this.formBuilder.group({
      zip: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  get addressField(): FormArray {
    return this.form.get('address') as FormArray;
  }

}
