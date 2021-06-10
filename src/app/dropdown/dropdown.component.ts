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
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.active) {
      this.active = false;
    }
  }

  openMenu(): void {
    this.active = !this.active;
  }
}
