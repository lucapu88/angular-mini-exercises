import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-cookies',
  templateUrl: './manage-cookies.component.html',
  styleUrls: ['./manage-cookies.component.scss'],
})
export class ManageCookiesComponent implements OnInit {
  close: boolean = false;
  popup: boolean = true;
  accept: boolean = null;
  notAccept: boolean = null;
  disabledBtn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  acceptCookiesOrNot(event: any): void {
    this.disabledBtn = event.target.checked; //mi serve per disabilitare il pulsante di conferma, è disabilitato de almeno una delle 2 checbox non viene cliccata

    if (event.srcElement.name === 'accept') {
      //nell'html abbiamo l'ngModel ad ogni cella e se avrà come nome accept diventerà true e quindi l'altra checbox diventerà false
      this.accept = true;
      this.notAccept = false;
    } else {
      //viceversa per l'altra checbox
      this.accept = false;
      this.notAccept = true;
    }
  }

  confirm(): void {
    //al click sul pulsante di conferma si chiuderà il riquadro con le checkbox e mostrerà un riquadro con la selezione effettuata che si richiuderà dopo 2 secondi
    this.popup = false;
    setTimeout(() => {
      this.close = true;
    }, 2000);
  }
}
