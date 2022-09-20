import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { LogLevel } from '../log-level';
import { MySpeacialLoggerService } from '../my-speacial-logger.service';
import { LOG_LEVEL_TOKEN } from '../app.tokes';
import { AnotherLoggerService } from '../another-logger.service';
import { LoggerService } from '../logger-service';

@Component({
  selector: 'app-mouse-track',
  templateUrl: './mouse-track.component.html',
  styleUrls: ['./mouse-track.component.css'],
  //providers: [MySpeacialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}]
})
export class MouseTrackComponent implements OnInit {

  logLevel: LogLevel = LogLevel.INFO;
  loggerService: LoggerService;
  // 필드 주입방식 (비권장)
  //@Input() private logger: MySpeacialLoggerService;

  constructor(
    // 현재 컴퍼넌트 까지만 찾겠다는 선언. 존재한다면 하위컴퍼넌트 부터 현재 컴퍼넌트까지 탐색해서
    // @Host로 선언한 서비스 없으면 에러 발생함!! 이때 @Optional을 붙여 주면 @Host로 선언한 서비스 없다면 그냥 넘어가는 것
    // 단, 해당 서비스를 주입 안하고 그냥 넘어가면 안되고, 아래처럼 삼항연산자나 if문을 통해 다른 대체 서비스를 주입하는 형식으로
    // 써야만 한다, 그냥 nullable이랑은 조금 다름
    @Host() @Optional() mySpecialLoggerService: MySpeacialLoggerService,
    anotherLoggerService: AnotherLoggerService 
    ) { 
    // 이런식으로 사용 가능한것 mySpecialLoggerService를 @Host 설정하고, 있으면 애로, 없으면 another를 주입 하라는 의미
    this.loggerService = mySpecialLoggerService ? mySpecialLoggerService : anotherLoggerService;
  }

  ngOnInit(): void {
  }

  // event는 MouseEvent, KeyboardWEvent, FocusEvent 등이 존재 (MDN에서 Related pages for UI events 를 참고) 
  captureMousePos($event: MouseEvent): void {
    this.loggerService.debug('click event occured');
    const pos: number[] = [$event.clientX, $event.clientY];
    this.loggerService.info(`x: ${pos[0]}  y: ${pos[1]}`)
  }
}
