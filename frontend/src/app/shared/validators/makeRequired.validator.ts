import { AbstractControl } from "@angular/forms";
import { InputValidationResponse } from "../validators/InputValidationResponse";

export function makeRequired(control: AbstractControl): InputValidationResponse {
  if(control.value?.length == 0) {
    return {
      message: 'Campo requerido'
    }
  }

  return null;
}
