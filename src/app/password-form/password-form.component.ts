import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpecialCharacters } from '../password.validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent implements OnInit {
  password: string = 'password';
  showHide: string = 'show';
  minLenghtError: boolean = false;
  SpecialCharactersError: boolean = false;

  formGroup: FormGroup = this.fb.group({
    password: [
      '',
      [Validators.required, Validators.minLength(8), SpecialCharacters],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  showPassword(text: string): void {
    if (text === 'password') {
      this.password = 'text';
      this.showHide = 'hide';
    } else {
      this.password = 'password';
      this.showHide = 'show';
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      alert('Password salvata correttamente');
      this.formGroup.reset();
      this.minLenghtError = false;
      this.SpecialCharactersError = false;
    } else {
      this.formGroup.get('password').hasError('minlength')
        ? (this.minLenghtError = true)
        : (this.minLenghtError = false);

      this.formGroup.get('password').hasError('specialCharacters')
        ? (this.SpecialCharactersError = true)
        : (this.SpecialCharactersError = false);
    }
  }
}
