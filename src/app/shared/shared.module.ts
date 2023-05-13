import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import { IconToggleDirective } from './button/icon-toggle/icon-toggle.directive';
import { IconToggleButtonComponent } from './button/icon-toggle-button/icon-toggle-button.component';



@NgModule({
  declarations: [
    IconToggleDirective,
    IconToggleButtonComponent
  ],
  exports: [
    IconToggleDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
