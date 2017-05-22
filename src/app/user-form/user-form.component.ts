import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  sexes = ['男', '女'];
  model = new User();

  // 定义隐藏结果
  submitted = false;

  constructor() { }

  ngOnInit() {
  }
  // 重置按钮
  newUser () {
    this.model = new User();
  }



  // 提交按钮
  onSubmit () {
    this.submitted = true;
  }
}
