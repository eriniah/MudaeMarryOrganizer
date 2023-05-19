import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SortMarryComponent} from "./sort-marry/sort-marry.component";

const routes: Routes = [
  {
    path: 'sort-marry',
    loadChildren: () => import('./sort-marry/sort-marry.module').then(mod => mod.SortMarryModule)
  },
  {
    path: '',
    redirectTo: 'sort-marry',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'sort-marry',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
