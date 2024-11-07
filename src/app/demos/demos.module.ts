import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { BindingsComponent } from './bindings/bindings.component';
import { DemosComponent } from './demos.component';


@NgModule({
  declarations: [
    BindingsComponent,
    DemosComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
