import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true
    }
  ]
})
export class StepperComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  currentValue = 0;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => {};

  ngOnInit(): void {
  }

  add(): void {
    this.currentValue += 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  subs(): void {
    this.currentValue -= 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  writeValue(value: number): void {
    this.currentValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
