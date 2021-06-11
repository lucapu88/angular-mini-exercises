import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0,0,0)',
        })
      ), //quando lo stato diventa 'in' la barra laterale (gialla) scorrerà in posizione 0, nel nostro caso verso destra alla sua posizione originaria
      state(
        'out',
        style({
          transform: 'translate3d(-100%, 0, 0)',
        })
      ), //quando lo stato diventa 'out' la barra laterale scorrerà in posizione -100, cioè verso sinistra e scomparirà
      transition('in => out', animate('400ms ease-in-out')), //velocità di movimento
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class ToggleSidebarComponent implements OnInit {
  menuState: string = 'in';

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    //quando clicco sul pulsante lo stato fa un toggle in base a come è impostato
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
