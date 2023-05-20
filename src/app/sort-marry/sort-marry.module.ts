import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarryListComponent } from './marry-list/marry-list.component';
import {
  SortMarryComponent,
  SortMarryImportDialogComponent
} from './sort-marry.component';
import {SharedModule} from "../shared/shared.module";
import {SortMarryRoutingModule} from "./sort-marry-routing.module";
import { MarryListImportComponent } from './marry-list-import/marry-list-import.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    MarryListComponent,
    SortMarryComponent,
    SortMarryImportDialogComponent,
    MarryListImportComponent,
  ],
  imports: [
    SortMarryRoutingModule,
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MarryListComponent,
    SortMarryComponent
  ]
})
export class SortMarryModule { }
