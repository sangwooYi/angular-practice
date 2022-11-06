import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-practice-on',
  templateUrl: './practice-on.component.html',
  styleUrls: ['./practice-on.component.css']
})
export class PracticeOnComponent implements OnInit {
  
  name: string = '상우';
  newName: string = '';
  constructor() { }

  ngOnInit(): void {

  }
  
  changeNameAfterTwoSecond(): void {
    setTimeout(() => {
      this.name = '유정';
    }, 2000);
  }

  applyName(name: string): void {
    if (name.trimStart().trimEnd()){
      this.name = name;
      this.newName = '';
    } else {
      alert("빈칸 안됨.");
    }
  }
 }
