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
    //hostlistner resta in ascolto  sul tipo di evento che scegliamo noi, in questo caso quando facciamo scroll con il mouse
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop; //il numero di scroll
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; //altezza del display
    const scrolled = (winScroll / height) * 100; //percentuale dello scroll
    this.progress = scrolled;

    if (scrolled >= 60 && scrolled < 85) {
      //il colore della barra cambierà in base al numero di percentuale dove si arriva
      this.color = 'yellow';
    } else if (scrolled >= 85) {
      this.color = 'red';
    } else {
      this.color = 'green';
    }
  }

  backToTop(): void {
    //al click sul pulsante, lo scroll torna a zero in maniera fluida
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
