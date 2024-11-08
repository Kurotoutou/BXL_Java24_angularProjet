import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.css'
})
export class DemoPipesComponent {

  text: string = "This Is Angular Bitch !!!";
  nb: number = 42.2654779518873685618756184564;
  today: Date = new Date;
  temperature: number = 42;
}
