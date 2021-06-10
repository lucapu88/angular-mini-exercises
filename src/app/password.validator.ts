import { AbstractControl, ValidationErrors } from '@angular/forms';

export function SpecialCharacters(
  control: AbstractControl
): ValidationErrors | null {
  const format: RegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const isInvalid = control.value && !format.test(control.value);
  return isInvalid
    ? { error: true, specialCharacters: 'no special characters' }
    : null;
}
