import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { todoForm } from '../todo-form';

@Component({
  selector: 'tp-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {

  @Input() idx!:number;
  @Input() todo!:todoForm;
  @Output() deleteList: EventEmitter<number> = new EventEmitter<number>();
  @Output() completeList: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }  
  ngOnInit(): void {
  }

  completeTodo():void {
    this.todo.isComplete = !this.todo.isComplete;
    this.completeList.emit();
  }
  deleteTodo(): void {
    this.deleteList.emit(this.idx);
  }
}
