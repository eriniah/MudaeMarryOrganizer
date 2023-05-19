import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SortMarryComponent} from "./sort-marry.component";

const routes: Routes = [
  {
    path: '',
    component: SortMarryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortMarryRoutingModule { }
