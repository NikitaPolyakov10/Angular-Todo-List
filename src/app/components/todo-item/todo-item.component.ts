import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem!: Todo;
  @Input() todosArr: any;
  @Output() onRemoveTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('todosArr', this.todosArr);
    
  }

  completeTodo() {
    this.todoItem.completed = !this.todoItem.completed;
  }
  deleteTodo() {
    this.onRemoveTodo.emit(this.todoItem.id);
  }
}
