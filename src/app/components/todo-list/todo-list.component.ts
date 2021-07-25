import { Component, DoCheck, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  constructor() { 
  }

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem('todos')!) || [];
  }
  ngDoCheck() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todos: Todo[] = [];

  updateTodos(newTodo: Todo) {
    this.todos.unshift(newTodo);

  }
  deleteTodo(id:number) {
    this.todos = this.todos.filter((item)=> item.id !== id);
  }
  showAll() {
    this.todos = this.todos.filter(item => item);
  }
  showActive() {
    this.todos;
  }
  showCompleted() {
    this.todos;
  }
}
