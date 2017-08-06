import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public account: string;
  public password: string;
  constructor(public service: LoginService) { }

  ngOnInit() {}


  doLogin(): void {
    this.service.login(this.account, this.password);
  }


}
