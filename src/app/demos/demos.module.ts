import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { BindingsComponent } from './demo-bindings/bindings.component';
import { DemosComponent } from './demos.component';
import {FormsModule} from '@angular/forms';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import {SharedModule} from '../shared/shared.module';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';


@NgModule({
  declarations: [
    BindingsComponent,
    DemosComponent,
    DemoPipesComponent,
    DemoDirectivesComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    SharedModule,
  ]
})
export class DemosModule { }
