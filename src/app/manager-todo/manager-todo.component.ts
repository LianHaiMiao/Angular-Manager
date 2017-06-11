import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-manager-todo',
  templateUrl: './manager-todo.component.html',
  styleUrls: ['./manager-todo.component.css'],
  providers: [TodoService]
})
export class ManagerTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
