import { Injectable } from '@angular/core';

// Injectable 자체가 의존성을 주입받고, 주입할 수 있다는 표기!
@Injectable({
  // Determines which injectors will provide the injectable.
  // root 인젝터가 이 서비스의 주입성을 갖도록 설정하는것
  // 이걸 통해, 이 app의 모든 구성요소에 이 서비스를 import해서 싱글톤으로 주입해 쓸 수 있게되는 것
  // 옵션은 아래 세가지 root, platform, any
  // 'root' : The application-level injector in most apps.
  // 'platform' : A special singleton platform injector shared by all applications on the page.
  // 'any' : Provides a unique instance in each lazy loaded module while all eagerly loaded modules share one instance.
  providedIn: 'root'
})
export class CalculatorService {
  constructor() { }

  add(a: number, b: number): number {
    return a + b;
  }

  sub(a: number, b: number): number {
    return a - b;
  }
  
  mul(a: number, b: number): number {
    return a * b;
  }
  
  div(a: number, b: number): number {
    if (b === 0) {
      throw Error
    }
    return a / b;
  }
}
