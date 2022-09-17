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
  providers: [
    {provide: COMPOSITION_BUFFER_MODE, useValue: false},
    CalculatorService,
    // provide에 올 값은 @Inject의 key값, useValue는 거기에 전달할 value 값
    // useValue 말고도, useClass도 자주 쓰임, 그 외에 useFactory, useExisting, useType 존재
    MySpeacialLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
