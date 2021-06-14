import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generality-form',
  templateUrl: './generality-form.component.html',
  styleUrls: ['./generality-form.component.scss'],
})
export class GeneralityFormComponent implements OnInit {
  nome: string = '';
  cognome: string = '';
  eta: number = 0;

  @Output() generality = new EventEmitter<any>();

  generalityForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    eta: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formInfo = {
      nome: this.generalityForm.value.nome,
      cognome: this.generalityForm.value.cognome,
      eta: this.generalityForm.value.eta,
      visibile: false,
    };
    this.generality.emit(formInfo);
  }
}
