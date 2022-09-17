import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private res: number;
  private anotherRes: number;
  

  constructor(public calculatorService: CalculatorService) { 
    this.res = 0;
    this.anotherRes = 0;
  }

  

  // 사용하려면 import 해야함 
  // init 메서드로, 해당 컴퍼넌트가 DOM 으로 구성될때 1회 시행 됨  (사실 constructor와 비슷한 역할)
  // 차이는 constuctor는 자바스크립트 기본 문법이므로, 자바스크립트 엔진으로 동작, 따라서 앵귤러 관할이 아님
  // 그래서 앵귤러 관할이 필요한 경우 ngOnInit을 사용하는것
  ngOnInit(): void {
  }

}
