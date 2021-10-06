import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  constructor() { }
  @Input('progress') progress = 0 ;
  ngOnInit(): void {
  }
   interval = 0;
  countDown() {
     this.interval = setInterval(() => {
      this.progress = this.progress - 1;
      if (this.progress == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stopCountDown() {
    clearInterval(this.interval);
  }
}
