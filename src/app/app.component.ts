import { Component } from '@angular/core';
import { Config } from './model/config';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  // 账号、密码
  public account: string;
  public password: string;
  // 管理系统标题
  public title = Config.SYSTEM_SETTING.title;
  // 选中效果
  
  // 缩小 
  public isMenuSmall: boolean = true;

  constructor(public service: AppService, public router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.service.login(this.account, this.password);
  }

}
