import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CheckValidService } from './check-valid.service';
import { todoForm, prodFForm } from './todo-form';
import { Observable, fromEvent } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList: todoForm[];
  todoVal: string;
  completeNum: number = 0;
  checkValidServce!: CheckValidService
  myData!: todoForm;
  // static은 디폴트값이 false, false면 change감지 이후 resolve, true면 결과 감지 직전에 resolve 
  @ViewChild('myModel', { static: true}) myNgModel!: NgModel;
  validResult!: boolean;  //?: 는 |undefined 가 자동으로 붙는것, !:는 무조건 붙여준 type만 들어올것이란 선언
  // ?:, !: 를 강제하는 이유는 null check 때문!

  @ViewChild('prodForm') prodForm!: NgForm;
  title: string = '상품 등록';
  product!: prodFForm;
  errorCodes: string[] = ['min', 'max', 'required', 'pattern'];
  errors: any[] = [];

  constructor(checkValidServce: CheckValidService) {
    this.todoList = []; 
    this.todoVal = '';
    this.checkValidServce = checkValidServce;
    this.initProduct();
  }

  ngOnInit(): void {
    // 각각 ngModel의 값/상태 변화를 Observable로 제공해주는 기능 (그냥 앵귤러가 제공해 줌)
    this.myNgModel.valueChanges?.subscribe(v => console.log(`value: ${v}`));
    this.myNgModel.statusChanges?.subscribe(s => console.log(`status: ${s}`));

    if (this.myNgModel.valid !== null) {
      this.validResult = this.myNgModel.valid;
    }
  }
  
  initProduct(): void {
    this.product = {name: '', price: '', qty: 0, desc: ''}
  }
  
  onSubmit(): void {
    // .stringify => JSON을 string으로 변환
    // .parse => string 객체를 JSON으로 변환
    console.log(`제출\n ${JSON.stringify(this.product)}`)
  }

  onReset(): void {
    this.initProduct();
  }

  checkValid(): void {
    if (this.myNgModel.valid !== null) {
      this.validResult = this.myNgModel.valid;
    } 
  }

  addTodo(): void {
    if (this.checkValidServce.isNotBlank(this.todoVal)) {
      const todo: todoForm = { title: this.todoVal, isComplete: false }
      this.todoList.push(todo);
    }
    this.todoVal = '';
  }
  completeTodo(): void {
    let cnt = 0
    this.todoList.forEach((el: todoForm) => {
      if (el.isComplete) {
        cnt += 1;
      }
    })
    this.completeNum = cnt;
  }
  deleteTodo(idx: number): void {
    this.todoList = this.todoList.filter((el: todoForm, i: number) => idx != i)
  }
}
