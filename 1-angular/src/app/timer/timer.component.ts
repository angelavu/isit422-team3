import { Component, OnInit } from '@angular/core';
import {SimpleTimer} from 'ng2-simple-timer';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private st: SimpleTimer) { 
  }
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer:string;

  ngOnInit() {
    this.st.newTimer('Timer', 1, true);
    this.subscribeTimer();
  }

  subscribeTimer() {
		this.timer = this.st.subscribe('Timer', () => this.timerCallback());
	}
  
  timerCallback(): void {
    ++this.seconds;
    if (this.seconds >= 60) {
      ++this.minutes;
      this.seconds = 0;
    }
    if (this.minutes >= 60) {
      ++this.hours;
      this.minutes = 0;
    }
	}
}
