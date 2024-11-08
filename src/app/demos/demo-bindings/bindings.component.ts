import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {

  // propriété => nomDeVariable: Type [=valeur];
  formateur: string = 'Seb';
  placeholderText: string = 'Rentrez voter nom';

  names: string[] = ['Osmane', 'Amin', 'Ayoub', 'Nicolas', 'Viktor', 'Jeoffrey', 'Christopher', 'Ana Maria'];

  result: string | null = null;

  getResult(): void {
    let looser: string = this.names[Math.floor(Math.random() * this.names.length)];
    let winner: string = this.names[Math.floor(Math.random() * this.names.length)];
    this.result = `${looser} doit offrir qqchose à ${winner}`
  }
}
