import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './logger-service';
import { LOG_LEVEL_TOKEN } from './app.tokes';
import { LogLevel } from './log-level';

@Injectable({
  providedIn: 'root'
})
export class AnotherLoggerService extends LoggerService {

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  log(logLevel: LogLevel, msg: string): void {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
    }
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string): string {
    return `[${LogLevel[logLevel]}] - ${msg}`;
  }

}
