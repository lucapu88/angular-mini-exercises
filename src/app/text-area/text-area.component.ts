import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  maxText: number = 20; //numero massimo di caratteri del testo
  disabled: boolean = false;
  sent: boolean = false;
  textSent: string = '';
  htmlTag: string = '';

  constructor() {}

  ngOnInit(): void {}

  textCheck(testo): void {
    //gli passo ciò che scrivo e calcolo il massimo che si può scrivere, ovvero al numero massimo di caratteri impostato prima vado a sottrarre ciò che scrivo, se arrivo sotto lo zero e quindi la cifra diventa un numero negativo, lo mostrerò a schermo di color rosso e disabiliterò il pulsante di invio.
    const textWidth = this.maxText - testo.value.length;
    textWidth < 0 ? (this.disabled = true) : (this.disabled = false);
  }

  submit(testo): void {
    //mostro semplicemente ciò che scrivo dopo aver cliccato sul pulsante
    this.textSent = testo.value;
    this.sent = true;
    if (this.textSent.includes('#')) {
      this.htmlTag = '<a href="">' + this.textSent + '</a>';
    } else {
      this.htmlTag = '<h2>' + this.textSent + '</h2>';
    }
  }
}
