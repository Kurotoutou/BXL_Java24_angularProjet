import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BindingsComponent} from './demo-bindings/bindings.component';
import {DemosComponent} from './demos.component';
import {DemoPipesComponent} from './demo-pipes/demo-pipes.component';
import {DemoDirectivesComponent} from './demo-directives/demo-directives.component';

const routes: Routes = [
  {path: 'bindings01', component: BindingsComponent},
  {path: 'demoPipe', component: DemoPipesComponent},
  {path: 'demoDirective', component: DemoDirectivesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
