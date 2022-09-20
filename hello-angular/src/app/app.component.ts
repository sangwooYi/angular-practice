import { Component, Inject } from '@angular/core';
import { MySpeacialLoggerService } from './my-speacial-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'hello-angular';
  myName: string = '';
  modeSelect: string = '';
  private mySpecialLoggerService: MySpeacialLoggerService;

  constructor(mySpecialLoggerService: MySpeacialLoggerService) {
    this.modeSelect = 'A';
    this.mySpecialLoggerService = mySpecialLoggerService;
  }
  printDebugLog() {
    // root 에서는 로그 레벨이 INFO로 주입된 상태이므로 출력 안됨!
    this.mySpecialLoggerService.debug("test DI tree!");
  }
}
