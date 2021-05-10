
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms';
import {Directive, Input} from '@angular/core';

function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      const group = control as FormGroup;
      if (group.controls['password'] && group.controls['confirmPassword']) {
        isValid = group.controls['password'].value === group.controls['confirmPassword'].value;
      }
    }
    if (isValid) {
      return null;

    } else {
      return { passwordCheck: true };
    }
  };
}

@Directive({
  selector: '[appMatchPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true}]
})
export class MatchPasswordDirective implements Validator {
  private valFn;

  constructor() {
    this.valFn = validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }
}


