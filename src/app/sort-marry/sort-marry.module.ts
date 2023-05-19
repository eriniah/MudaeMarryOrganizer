import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarryListComponent } from './marry-list/marry-list.component';
import {SortMarryComponent, SortMarryDialogComponent} from './sort-marry.component';
import {SharedModule} from "../shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {SortMarryRoutingModule} from "./sort-marry-routing.module";
import { MarryListImportComponent } from './marry-list-import/marry-list-import.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    MarryListComponent,
    SortMarryComponent,
    SortMarryDialogComponent,
    MarryListImportComponent
  ],
  imports: [
    SortMarryRoutingModule,
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    MarryListComponent,
    SortMarryComponent
  ]
})
export class SortMarryModule { }
