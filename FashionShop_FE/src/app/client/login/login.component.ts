import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { CommonService } from '../../@core/customs/common.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _service: LoginService,
    private routerService: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;

  login(){
    if(this.username === '' || this.password === ''){
      this.commonService.toastrDanger("Bạn chưa nhập tài khoản hoặc mật khẩu !!!");
    } else {
      this._service.selectUser().subscribe(res => {
        let checkResult;
        for (const item of res) {
          if(item.userName == this.username && item.password == this.password){
            this.routerService.navigateByUrl('/');
            this.setToken(item.userId.toString());
            checkResult = true;
          }
        }

        if(checkResult == true){
          this.commonService.toastrSuccess("Đăng nhập thành công.")
        } else {
          this.commonService.toastrDanger("Tài khoản hoặc mật khẩu không chính xác !!!");
        }
      })
    }
  }

  setToken(token: string){
    localStorage.setItem('login', token)
  }

}