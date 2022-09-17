import { LogLevel } from "./log-level";

export abstract class LoggerService {
  logLevel: LogLevel;
  
  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }
  debug(msg: string): void {
    this.log(LogLevel.DEBUG, msg);
  }
  info(msg: string): void {
    this.log(LogLevel.INFO, msg);
  }
  warn(msg: string): void {
    this.log(LogLevel.WARN, msg);
  }
  error(msg: string): void {
    this.log(LogLevel.ERROR, msg);
  }

  abstract log(logLevel: LogLevel, msg: string): void;
  protected isProperLogLevel(logLevel: LogLevel):boolean {
    if (this.logLevel === LogLevel.DEBUG) {
      return true;
    }
    return logLevel >= this.logLevel;
  }
}
