import {Component, OnInit} from '@angular/core';
import {ThemeOption, ThemeService} from "../../../shared/ux/theme.service";

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent {
  private _useDarkTheme = true;
  get useDarkTheme() {
    return this._useDarkTheme;
  }
  set useDarkTheme(useDarkTheme: boolean) {
    this._useDarkTheme = this.useDarkTheme;
    this.themeService.changeTheme(useDarkTheme ? 'dark' : 'light');
  }

  constructor(private readonly themeService: ThemeService) {
    this._useDarkTheme = themeService.theme === 'light' ? false : true;
  }

}
