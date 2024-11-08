import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { TimerComponent } from './timer/timer.component';
import { ExosComponent } from './exos.component';
import { ChronometreComponent } from './chronometre/chronometre.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    TimerComponent,
    ExosComponent,
    ChronometreComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule
  ]
})
export class ExosModule { }
