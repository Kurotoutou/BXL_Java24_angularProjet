import { Component } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrl: './chronometre.component.css'
})
export class ChronometreComponent {
  seconds: number = 0;
  IntervalId: any;


  startChronometre() {
    this.IntervalId = setInterval(() => this.incrementSeconds(), 1000);
  }

  stopChronometre() {
    clearInterval(this.IntervalId);
    this.seconds = 0;
    this.IntervalId = null;
  }

  pauseChronometre() {
    clearInterval(this.IntervalId);
    this.IntervalId = null;
  }

  incrementSeconds() {
    this.seconds++;
  }
}
