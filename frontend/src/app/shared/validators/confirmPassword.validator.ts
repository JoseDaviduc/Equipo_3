import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const formGroup = control as FormGroup;
  const password = formGroup.get('contraseña')?.value;
  const confirmPassword = formGroup.get('confirmcontraseña')?.value;

  if (password === confirmPassword) {
    return null;
  }

  return {
    passwordMismatch: {
      message: 'Las contraseñas no coinciden',
    },
  };
};
