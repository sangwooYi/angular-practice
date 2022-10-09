import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childrens',
  templateUrl: './childrens.component.html',
  styleUrls: ['./childrens.component.css']
})
export class ChildrensComponent implements OnInit {
  isChecked: boolean;

  constructor() { 
    this.isChecked = false;
  }

  ngOnInit(): void {
  }

}
