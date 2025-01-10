import { InputValidationResponse } from './InputValidationResponse';
import { AbstractControl } from '@angular/forms';

export function nameValidator(  { value }: AbstractControl
): InputValidationResponse {
  const VALID_NAME_REGEX = new RegExp(/^(?:\p{Lu}[\p{L}'-]*\s?)+$/u);

  if (VALID_NAME_REGEX.test(value)) {
    return null;
  }

  return {
    message: 'Formato incorrecto',
  };
}
