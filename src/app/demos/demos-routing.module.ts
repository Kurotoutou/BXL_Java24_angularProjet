import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BindingsComponent} from './bindings/bindings.component';
import {DemosComponent} from './demos.component';

const routes: Routes = [
  {path:'', component: DemosComponent, children: [
      {path: 'bindings01', component: BindingsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
