import { Component } from '@angular/core';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  txtFromChild: string = '';
  txtToChild: string = '히히';

  constructor() {

  }
  printEmitStr(value: string): void {
    this.txtFromChild = value;
  }

}
