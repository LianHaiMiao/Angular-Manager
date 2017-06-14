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
  }

  // 完成任务
  deal(): void {
    this.todos = this.todoservice.getTodos();
  }

  // 监控每一个复选框，被选中了就将它的complete设置为true
  changeStatus(id: number): void {
    console.log(id);
    this.todoservice.complete(id);
  }


}
