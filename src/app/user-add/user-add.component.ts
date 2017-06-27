import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
// 引入用户服务
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers: [ UserService ]
})
export class UserAddComponent implements OnInit {
  
  userForm: FormGroup;

  sexes = ['男', '女'];
  
  // 注入FormBuilder
  constructor(private fb: FormBuilder, private US: UserService) {
    this.createForm();  
  }

  ngOnInit() {
  }

  createForm(): void {
    this.userForm = this.fb.group({
      account: ['', Validators.required ],
      password: ['', Validators.required ],
      mobile: ['', Validators.required ],
      email: ['', Validators.required ],
      sex: "男",
      province: "",
      city: "",
      birthday: ""
    })
  }
  // 提交表单上传用户信息
  onSubmit(newuser: FormGroup): void {

  }
}
