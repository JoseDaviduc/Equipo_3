import { AbstractControl, ValidatorFn } from '@angular/forms';
import { InputValidationResponse } from './InputValidationResponse';

export function emailValidator(): ValidatorFn {
  return function validator({ value }: AbstractControl): InputValidationResponse {

    if (value === null || value === undefined || value === '') {
      return {
        message: 'Campo requerido',
      };
    }

    const VALID_EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9ñÑ._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if (VALID_EMAIL_REGEX.test(value)) {
      return null;
    }

    return {
      message: 'Correo Invalido',
    };
  };
}
