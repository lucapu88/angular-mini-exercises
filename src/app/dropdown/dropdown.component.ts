import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  active: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keydown.escape', ['$event'])
  //hostlistner resta in ascolto  sul tipo di evento che scegliamo noi, in questo caso quando schiacciamo il pulsante esc della tastiera
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.active) {
      this.active = false;
    }
  }

  openMenu(): void {
    //al semplice click mostro/nascondo il menu
    this.active = !this.active;
  }
}
