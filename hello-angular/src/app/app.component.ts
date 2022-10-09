import { Component, Inject, ViewChild } from '@angular/core';
import { MySpeacialLoggerService } from './my-speacial-logger.service';
import { ChildCompComponent } from './child-comp/child-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'hello-angular';
  myName: string = '';
  modeSelect: string = '';
  testNum: number = 0;
  // 타입스크립트 4.0 이후부터, 초기화 안한상태에서 변수만선언하려면
  // !:로 타입을 지정해 주어야만함!
  @ViewChild(ChildCompComponent) childComp!: ChildCompComponent;


  private mySpecialLoggerService: MySpeacialLoggerService;

  constructor(mySpecialLoggerService: MySpeacialLoggerService) {
    this.modeSelect = 'A';
    this.mySpecialLoggerService = mySpecialLoggerService;

  }
  printDebugLog() {
    // root 에서는 로그 레벨이 INFO로 주입된 상태이므로 출력 안됨!
    this.mySpecialLoggerService.debug("test DI tree!");
  }

  addNums() {
    this.testNum += 1;
  }

  testClick() {
    console.log(this.childComp.myTest);
    this.childComp.hey();
  }

}
