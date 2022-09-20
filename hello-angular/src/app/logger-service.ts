import { LogLevel } from "./log-level";

/**
 *  abstract vs interface
 *  abstract class는 구현된 메서드를 포함 할 수 있다.
 *  단, 구현 안한 메서드는 abstract를 붙여 주어야 함
 *  변수도 초기화 해도 되고, 안해도 되고,
 *  역시 초기화 안한 변수는 abstract 붙여 주어야 함
 *  자식 클래스는 extends 를 통해 상속
 * 
 *  interface는 구현된 메서드 포함 불가, 변수 초기화 불가,
 *  자식 클래스는 implements를 통해 상속
 *  
 *  따라서, 자식 클래스간의 공통적인 메서드로직을 갖고 있거나,
 *  공통적으로 초기화값을 갖는 변수를 갖고있으면
 *  abstract class가 유리하고, 
 *  단순히 틀을 상속 받는 형태로 작성하려면 interface가 유리함 
 */
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
  // interface나 abstract 클래스를 상속 받을 때는, 구현 안된 클래스들을 구현해 주어야 사용 가능하다!
  abstract log(logLevel: LogLevel, msg: string): void;
  protected isProperLogLevel(logLevel: LogLevel):boolean {
    if (this.logLevel === LogLevel.DEBUG) {
      return true;
    }
    return logLevel >= this.logLevel;
  }
}
