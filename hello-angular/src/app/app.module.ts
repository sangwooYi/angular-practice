import { NgModule } from '@angular/core';
import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HonorPipe } from './honor.pipe';
import { CalculatorComponent } from './calculator/calculator.component';

import { CalculatorService } from './calculator.service';
import { MySpeacialLoggerService } from './my-speacial-logger.service';
import { MouseTrackComponent } from './mouse-track/mouse-track.component';
import { LogLevel } from './log-level';
import { LOG_LEVEL_TOKEN } from './app.tokes';
import { AnotherLoggerService } from './another-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HonorPipe,
    CalculatorComponent,
    MouseTrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 작성한 서비스들은 providers에 선언 되어있어야 앵귤러가 앱 컴퍼넌트들한테 주입해 줄 수 있다. (root 임)
  providers: [
    {provide: COMPOSITION_BUFFER_MODE, useValue: false}, // 이것도 useValue
    CalculatorService,
    // provide에 올 값은 @Inject의 key값, useValue는 거기에 전달할 value 값
    // useValue 말고도, useClass도 자주 쓰임, 그 외에 useFactory, useExisting, useType 존재
    MySpeacialLoggerService,  // useClass shorthands 인것 실제로는 { provide: MySpecialLoggerService, useClass: MySpecialLoggerService}인거! 
    AnotherLoggerService,   // 따라서 useClass의 provide와 useClass값이 항상 같을 이유는 없다, 다형성 처럼  { provide: LoggerService, useClass: AnotherLoggerService } 이렇게 선언하면 LoggerService를 주입한다고 선언하면 AnotherLoggerService가 주입되는 것 
    { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}, // 얜 useValue useValue 쓸거면 무조건 InjectionToken 통해 key값 토큰화 할 것 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
