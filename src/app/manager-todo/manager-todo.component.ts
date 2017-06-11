import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-manager-todo',
  templateUrl: './manager-todo.component.html',
  styleUrls: ['./manager-todo.component.css'],
  providers: [TodoService]
})
export class ManagerTodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    this.todos = this.todoservice.getTodos();
  }

}
