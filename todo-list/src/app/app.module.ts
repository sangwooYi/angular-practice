import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckValidService } from './check-valid.service';

import { AppComponent } from './app.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
// import { MinNumValueValidator, MaxNumValueValidator } from './custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    TodoElementComponent,
    // MinNumValueValidator,
    // MaxNumValueValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    CheckValidService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
