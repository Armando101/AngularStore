import { AbstractControl } from '@angular/forms';

export class MyValidators {
    static isPriceValid(control: AbstractControl): object {

        if (control.value > 100000) {
            return {price_invalid: true};
        }
        return null;
    }
}
