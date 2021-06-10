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

  constructor() {}

  ngOnInit(): void {}

  acceptCookiesOrNot(event: any): void {
    if (event.srcElement.name === 'accept') {
      this.accept = true;
      this.notAccept = false;
    } else {
      this.accept = false;
      this.notAccept = true;
    }
  }

  confirm(): void {
    this.popup = false;
    setTimeout(() => {
      this.close = true;
    }, 2000);
  }
}
