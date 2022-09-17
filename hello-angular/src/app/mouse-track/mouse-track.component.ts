import { Component, Input, OnInit } from '@angular/core';
import { LogLevel } from '../log-level';
import { MySpeacialLoggerService } from '../my-speacial-logger.service';
import { LOG_LEVEL_TOKEN } from '../app.tokes';

@Component({
  selector: 'app-mouse-track',
  templateUrl: './mouse-track.component.html',
  styleUrls: ['./mouse-track.component.css'],
  providers: [MySpeacialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}]
})
export class MouseTrackComponent implements OnInit {

  logLevel: LogLevel = LogLevel.INFO;
  mySpecialLoggerService: MySpeacialLoggerService;
  // 필드 주입방식 (비권장)
  //@Input() private logger: MySpeacialLoggerService;

  constructor(mySpecialLoggerService: MySpeacialLoggerService) { 
    this.mySpecialLoggerService = mySpecialLoggerService;
  }

  ngOnInit(): void {
  }

  // event는 MouseEvent, KeyboardWEvent, FocusEvent 등이 존재 (MDN에서 Related pages for UI events 를 참고) 
  captureMousePos($event: MouseEvent): void {
    this.mySpecialLoggerService.debug('click event occured');
    const pos: number[] = [$event.clientX, $event.clientY];
    this.mySpecialLoggerService.info(`x: ${pos[0]}  y: ${pos[1]}`)
  }
}
