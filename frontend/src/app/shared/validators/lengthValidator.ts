import { AbstractControl, ValidatorFn } from '@angular/forms';
import { InputValidationResponse } from './InputValidationResponse';

interface Length {
  min: number;
  max: number;
}

export function lengthValidator({ min, max, optional = false }: { min: number; max: number; optional?: boolean }): ValidatorFn {
  return function validator({
    value,
  }: AbstractControl): InputValidationResponse {
    if (optional && (value === null || value === undefined || value === '')) {
      return null;
    }

    if (value.length === 0 && optional == false) {
      return {
        message: `Campo requerido`,
      };
    }

    if (value.length < min) {
      return {
        message: `La longitud mínima debe ser de ${min}`,
      };
    }

    if (value.length > max) {
      return {
        message: `La longitud máxima debe ser de ${max}`,
      };
    }

    return null;
  };
}
