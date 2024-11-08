import { Component } from '@angular/core';
import {Trainer} from '../../shared/models/trainer';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.css'
})
export class DemoDirectivesComponent {
  i: number = 0;
  myColors: string[] = ['darkred', 'darkgreen', 'darkblue', 'goldenrod'];
  myColor: string = 'darkred';

  isBold: boolean = false;
  isBig: boolean = false;
  isItalic: boolean = false;

  isDayTime: boolean = true;

  trainers: Trainer[] = [
    {
      id: 1,
      firstName : 'Seb',
      lastName : 'Bya',
      pictureUrl: 'seb.png'
    },
    {
      id: 2,
      firstName : 'Flavian',
      lastName: 'Ovyn',
      pictureUrl: 'flavian.png'
    },
    {
      id: 3,
      firstName : 'alex',
      lastName: 'Kimtsaris',
      pictureUrl: 'Alex.png'
    }
  ];

  constructor() {
    setInterval(() => {
      this.myColor = this.myColors[this.i++ % this.myColors.length];
    }, 500);
  }

  toggleIsBold() {
    this.isBold = !this.isBold
  };

  toggleIsBig() {
    this.isBig = !this.isBig
  }

  toggleIsItalic() {
    this.isItalic = !this.isItalic;
  }

  toggleIsDayTime() {
    this.isDayTime = !this.isDayTime;
  }
}
