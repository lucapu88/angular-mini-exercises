import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  progress: number = 0;
  total: number = 0;
  color: string = 'green';

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.progress = scrolled;

    if (scrolled >= 60 && scrolled < 85) {
      this.color = 'yellow';
    } else if (scrolled >= 85) {
      this.color = 'red';
    } else {
      this.color = 'green';
    }
  }
}
