import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

// routes 변수에 Routes 타입으로 path 들을 설정해 줌 (특정 기능만을 담당하는 모듈은 이렇게 분리해서 export하고 main module에서 import 해서 사용할것!)
const routes: Routes = [
  { path: 'first', 
    component: FirstComponent, 
    children: [
      { path: 'a', component: FirstChildComponent },
      { path: 'a/:id', component: FirstChildComponent}]
  },
  { path: 'second', 
    component: SecondComponent,
    children: [{ path: 'b', component: SecondChildComponent }]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // 말그대로 export module, 이렇게 export를 해주면 다른 NgModule에서 import 해서 쓸 수 있게 됨
  // 그냥 JS/TS에서 export / import 모듈 하는거임!
  exports: [RouterModule]
})
export class AppRoutingModule { }
