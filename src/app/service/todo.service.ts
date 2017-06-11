import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

// 引入服务，负责对任务的增删查改, @Injectable是一个标签告诉Angular4我们定义了一个服务

@Injectable()

export class TodoService {

    // 保存任务列表
    todos: Todo[] = [];

    constructor() {
        this.todos.push(new Todo(1, '明天早上要吃早饭哦～'));
        this.todos.push(new Todo(2, '今天晚上要吃跳舞哈～'));
    }

    // 添加一个新任务
    addTodo(todo: Todo): TodoService {
        this.todos.push(todo);
        return this;
    }

    // 删除一个新任务
    delTodo(id: number): TodoService {
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }

    // 查看现在所有的任务
    getTodos(): Todo[] {
        return this.todos;
    }

}