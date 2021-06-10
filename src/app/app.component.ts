import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'angular-mini-esercitazione';
  progressBar: boolean = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      if (location.path() != '/progressBar') {
        this.progressBar = true;
      } else {
        this.progressBar = false;
      }
    });
  }
}
