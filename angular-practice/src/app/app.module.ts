import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { PracticeOnComponent } from './practice-on/practice-on.component';
import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { TstCompComponent } from './tst-comp/tst-comp.component';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstComponent,
    SecondComponent,
    FirstChildComponent,
    PracticeOnComponent,
    TstCompComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // 한글 NgModel에서 실시간 양방향 바인딩하려면 이거 반드시 주입해 주어야 함
    { provide: COMPOSITION_BUFFER_MODE, useValue: false},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
