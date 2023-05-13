import { Injectable } from '@angular/core';
import {LoggerService} from "../util/logger.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme: ThemeOption;
  get theme() {
    return this._theme;
  }

  constructor(private readonly logger: LoggerService) {
    this._theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    this.changeTheme(this._theme);
  }

  public changeTheme(preferred: ThemeOption) {
    const bodyElement = document.getElementById('app-body');
    if (bodyElement) {
      bodyElement.classList.remove('app-light-theme', 'app-dark-theme');
      bodyElement.classList.add(`app-${preferred}-theme`);
    } else {
      this.logger.error("Unable to find app body element. Unable to set background color");
    }
  }

}

export type ThemeOption = 'light' | 'dark';
