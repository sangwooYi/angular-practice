import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'cm-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  tmpId: string | null = "";
  ngOnInit(): void {
    // 라우터에 전달한 파라미터값에 접근하는 방법!! 기억하자 
    // 현재 라우트를 찍고, param 매핑한뒤 특정 key값의 value를 가져오는것
    // snapshot은 동기적  / rxJs 는 비동기적  https://angular.io/guide/router 에서 
    // Accessing query parameters and fragments 참고
    this.tmpId = this.route.snapshot.paramMap.get('id');
    /**
     *  rxJs 방법으로 접근하는방법은 아래와 같다. (이건 비동기적)
     *  근데 굳이 비동기적 상황이 필요한거 아니면 snapshot 사용하는게 편함! 
     *  rxJs는 ajax 요청할때나 쓰자...
     *   this.heroes$ = this.route.paramMap.pipe(
          switchMap(params => {
          this.selectedId = Number(params.get('id'));
          return this.service.getHeroes();
    }));
     * 
     */
  }

}
