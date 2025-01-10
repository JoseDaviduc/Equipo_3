import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    if (!/^[0-9]+$/.test(value)) {
      return { message: 'Solo se aceptan números.' };
    }


    if (value.length !== 10) {
      return { message: 'Solo se aceptan 10 digitos.' };
    }

    return null;
  };
}
