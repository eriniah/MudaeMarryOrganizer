import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import { IconToggleDirective } from './button/icon-toggle/icon-toggle.directive';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";



const creations = [
  IconToggleDirective
];

const sharedModules = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  DragDropModule
];

@NgModule({
  declarations: [
    ...creations
  ],
  exports: [
    ...creations,
    ...sharedModules
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ]
})
export class SharedModule { }
