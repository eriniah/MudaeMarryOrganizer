import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './nagivation/main-toolbar/main-toolbar.component';
import {SharedModule} from "../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        MainToolbarComponent
    ],
    exports: [
        MainToolbarComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CoreModule { }
