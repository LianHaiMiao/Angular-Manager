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

  // 新增任务
  onEnter(newtodo: string): void {
    this.todoservice.addTodo(new Todo(this.todoservice.currentId, newtodo));
    this.freshTodoList();
  }

  // 刷新任务列表,只有未完成的任务可以显示
  freshTodoList(): Todo[] {
    let futureTodo: Todo[];
    for (let todo of this.todoservice.todos) {
      if (!todo.complete) {
        futureTodo.push(todo);
      }
    }
    return futureTodo;
  }

  // 完成任务


}
