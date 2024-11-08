import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimerComponent} from './timer/timer.component';
import {ExosComponent} from './exos.component';
import {ChronometreComponent} from './chronometre/chronometre.component';

const routes: Routes = [
  {path: '', component: ExosComponent, children: [
      {path: 'exo01', component: TimerComponent},
      {path: 'chronometre', component: ChronometreComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
