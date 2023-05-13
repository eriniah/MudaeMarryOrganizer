import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {LogLevel} from "../../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  get level(): LogLevel {
    return environment.logging.level;
  }

  public log(level: LogLevel, ...log: any[]): void {
    if (level >= this.level) {
      console.log(log);
    }
  }

  public error(...log: any[]): void {
    this.log(LogLevel.ERROR, ...log);
  }

  public info(...log: any[]): void {
    this.log(LogLevel.INFO, ...log);
  }

  public debug(...log: any[]): void {
    this.log(LogLevel.DEBUG, ...log);
  }

}
