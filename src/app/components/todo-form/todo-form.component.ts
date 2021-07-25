import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() onAddTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  newTodoText: string = '';
  id: number = 1;

  addTodo() {
    if(this.newTodoText.trim()) {
      const newTodo: Todo = {
        id : this.id++,
        text : this.newTodoText,
        completed : false
      }
      this.onAddTodo.emit(newTodo);
      this.newTodoText = '';
    }
  }

}
