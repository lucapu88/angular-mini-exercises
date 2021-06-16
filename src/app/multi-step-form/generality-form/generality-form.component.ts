import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralityC } from 'src/app/forms';

@Component({
  selector: 'app-generality-form',
  templateUrl: './generality-form.component.html',
  styleUrls: ['./generality-form.component.scss'],
})
export class GeneralityFormComponent implements OnInit {
  generalityModel: GeneralityC;

  @Output() generality = new EventEmitter<any>();

  generalityForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    cognome: ['', Validators.required],
    eta: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // assegno alla classe Generality tutti i dati del form, e tramite il metodo emit la invio al padre di questo componente
    // mi passo la proprietà visibile settata a false in modo da rendere il form invisibile
    this.generalityModel = {
      nome: this.generalityForm.value.nome,
      cognome: this.generalityForm.value.cognome,
      eta: this.generalityForm.value.eta,
      visibile: false,
    };
    this.generality.emit(this.generalityModel);
  }
}
