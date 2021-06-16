import { Component, OnInit } from '@angular/core';
import { GeneralityC, DetailsC } from '../forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss'],
})
export class MultiStepFormComponent implements OnInit {
  accept: boolean = false;
  formGeneralityInfo = new GeneralityC();
  formDetailsInfo = new DetailsC();

  constructor() {}

  ngOnInit(): void {}

  outputGeneralityInfo(generality: any): void {
    //qui ricevo tutta la roba dal componente figlio (generality-form) e la salvo in una variabile
    this.formGeneralityInfo = generality;
  }

  outputDetailsInfo(details: any): void {
    this.formDetailsInfo = details;
  }

  confirm(): void {
    const request = {
      nome: this.formGeneralityInfo.nome,
      cognome: this.formGeneralityInfo.cognome,
      età: this.formGeneralityInfo.eta,
      sesso: this.formDetailsInfo.gender,
      email: this.formDetailsInfo.email,
    }; //qui poi si potrebbe fare una chiamata al backend per inviare dati con la nostra constante request

    this.accept = true;
  }
}
