import { AbstractControl } from '@angular/forms';

export class MyValidators {
    static isPriceValid(control: AbstractControl): object {

        if (control.value > 100000) {
            return {price_invalid: true};
        }
        return null;
    }

    static validPassword(control: AbstractControl): object {
        const value = control.value;
        if (!containsNumber(value)) {
            return {invalid_password: true};
        }
        return null;
    }

    static matchPasswords(control: AbstractControl): object {
        const password = control.get('password').value;
        const confirmPassword = control.get('confirmPassword').value;

        if (password === confirmPassword) {
            return null;
        }
        return {match_password: true};
    }

}

function isNumber(value: string): boolean {
    return !isNaN(parseInt(value, 10));
}

function containsNumber(value: string): boolean {
    return value.split('').find(v => isNumber(v)) !== undefined;
}
