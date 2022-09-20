import { Inject, Injectable } from '@angular/core';
import { LogLevel } from './log-level';
import { format } from 'date-fns'
import { LOG_LEVEL_TOKEN } from './app.tokes';
import { LoggerService } from './logger-service';

@Injectable({
  // 'root' 에다가 이 서비스 주입하는 거라 생각하면 됨
  providedIn: 'root'
})
export class MySpeacialLoggerService extends LoggerService {

  // public이 디폴트 값이다.
  public logs: string[] = [];
  // readonly라는 속성 지원. 초기화만 가능, 이후 값 할당 불가 
  // 자바에서 private final이랑 같은 역할이라 생각하면 됨. 상숫값은 private readonly 제어자 추가 할 것
  private readonly MAX_HISTORY_CNT: number = 100;
  private readonly TIME_FORMATTER: string = "yyyy-MM-dd HH:mm:ss.SSS"
  
  // @Inject(key값)
  // key값은 InjectionToken을 통해 토큰화 한 값을 사용하는것을 권장.
  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) { 
    // 상속받을때, 상위 컴퍼넌트의 초기화값을 이용하는 법
    super(logLevel);
  }

  public log(logLevel: LogLevel, msg: string): void {
    const logMsg: string = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }

  private keepLogHistory(log: string): void {
    if(this.logs.length === this.MAX_HISTORY_CNT) {
      this.logs.shift(); // 첫번째요소 제거
    }
    // 로그 누적이 100개가 되면 저장된 로그의 첫번째 요소 제거후 현재 로그 추가
    // (FIFO 방식)
    this.logs.push(log);
  }
  
  private getFormattedLogMsg(logLevel: LogLevel, msg: string): string {
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    // 인덱싱 되는거보면 [] 안에 넣을 경우 자동으로 해당 enum 값의 인덱스 값으로 변환되는듯?
    // 기본 enum은 0부터 1씩 증가하며, enum에 값을 대입하여 설정할 수도 있음
    return `[${LogLevel[logLevel]}] ${curTimestamp} -- ${msg}`
  }

}
