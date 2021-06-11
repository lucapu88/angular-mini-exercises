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
  }); //setto il form impostando il valore della password e i criteri: in questo caso la password è obbligatoria, deve avere un minimo di 8 caratteri, e deve contenere almeno 1 carattere speciale

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  showPassword(text: string): void {
    //viene passato il ripo di input e se è di tipo password (quindi non visibile), al click diventa di tipo testo (e possiamo leggerlo).
    //allo stesso tempo il testo del pulsante cambia da visibile a nascondi e viceversa.
    if (text === 'password') {
      this.password = 'text';
      this.showHide = 'hide';
    } else {
      this.password = 'password';
      this.showHide = 'show';
    }
  }

  onSubmit(): void {
    //al click sul pulsante di conferma se il form è valido e quindi ciò che abbiamo scritto rispetta i criteri sopra impostati, viene mostrato un alert di conferma, cancello ciò che avevo scritto nell'input e reimposto gli errori di default.
    if (this.formGroup.valid) {
      alert('Password salvata correttamente');
      this.formGroup.reset();
      this.minLenghtError = false;
      this.SpecialCharactersError = false;
    } else {
      //se invece il form è invalido imposto delle proprietà booleane che mostreranno le diciture nell'html in base al tipo di errore
      this.formGroup.get('password').hasError('minlength')
        ? (this.minLenghtError = true)
        : (this.minLenghtError = false);

      this.formGroup.get('password').hasError('specialCharacters')
        ? (this.SpecialCharactersError = true)
        : (this.SpecialCharactersError = false);
    }
  }
}
