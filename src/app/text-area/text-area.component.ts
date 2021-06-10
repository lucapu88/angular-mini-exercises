import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  maxText: number = 20;
  disabled: boolean = false;
  sent: boolean = false;
  textSent: string = '';
  htmlTag: string = '';

  constructor() {}

  ngOnInit(): void {}

  textCheck(testo): void {
    const textWidth = this.maxText - testo.value.length;
    textWidth < 0 ? (this.disabled = true) : (this.disabled = false);
  }

  submit(testo): void {
    this.textSent = testo.value;
    this.sent = true;
    if (this.textSent.includes('#')) {
      this.htmlTag = '<a href="">' + this.textSent + '</a>';
    } else {
      this.htmlTag = '<h2>' + this.textSent + '</h2>';
    }
  }
}
