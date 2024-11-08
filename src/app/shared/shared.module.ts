import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemosRoutingModule} from '../demos/demos-routing.module';
import {FormsModule} from '@angular/forms';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';
import { TempPipe } from './pipes/temp.pipe';
import { ToTimerPipePipe } from './pipes/to-timer-pipe.pipe';



@NgModule({
  declarations: [
    ToFarenheitPipe,
    TempPipe,
    ToTimerPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToFarenheitPipe,
    TempPipe,
    ToTimerPipePipe,
  ]
})
export class SharedModule { }
