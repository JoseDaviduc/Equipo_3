import { AbstractControl, ValidatorFn } from '@angular/forms';
import { InputValidationResponse } from './InputValidationResponse';

const validColorPattern = /^[a-zA-Z\s,]+$/;

export function wordValidator(): ValidatorFn {
  return function validator({ value }: AbstractControl): InputValidationResponse {

    // Verificar si el campo está vacío
    if (value === null || value === undefined || value === '') {
      return {
        message: 'Campo requerido',
      };
    }

    // Verificar el formato del color (solo letras, espacios o comas)
    if (!validColorPattern.test(value)) {
      return {
        message: 'Formato incorrecto. Usa solo letras, espacios o comas',
      };
    }

    return null;
  };
}
