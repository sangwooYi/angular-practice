import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { ChildrensComponent } from '../childrens/childrens.component';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  myTest: string = '안녕 ^^';
  @Input() propsNum: number = 0;  // 주입 받을떈 input (prop)
  @Output() emitClick: EventEmitter<number> = new EventEmitter<number>(); // 부모 컴포넌트로 emit 할때는 output
  @ViewChildren(ChildrensComponent) childComps!: QueryList<ChildrensComponent>;

  checkListNums: number[] = [1, 2, 3, 4];
 
  constructor() { 
  }

  ngOnInit(): void {
  }

  emitEvent() {
    this.emitClick.emit(); // @Ouuput으로 선언한 EventEmitter 인스턴스의 .emit 메서드를 활용
  }

  hey() {
    console.log("hey~");
  }
  private youj() {
    console.log("안될걸? ^^");
  }

  checkAll() {
    this.childComps.map((comp) => {
      return comp.isChecked = true
    });
  }
  unCheckAll() {
    this.childComps.map((comp) => {
      return comp.isChecked = false;
    })
  }
}
