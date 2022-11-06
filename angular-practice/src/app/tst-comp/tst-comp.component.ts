import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-tst-comp',
  templateUrl: './tst-comp.component.html',
  styleUrls: ['./tst-comp.component.css']
})
export class TstCompComponent implements OnInit {

  @Input() testStr!: string;
  // 이부분이 부모에 걸린 태그에서 ()에 들어온다 (emitStr)="메서드($event)" 형식으로 들어감!
  @Output() emitStr: EventEmitter<string>  = new EventEmitter<string>();


  isOnOf: boolean = false;
  tt: string = '안녕';
  constructor() { }

  ngOnInit(): void {
  }

  convOnOff(): void {
    this.isOnOf = !this.isOnOf;
  }
  emitToParent(value: string): void {
    this.emitStr.emit(value);
  }
}
