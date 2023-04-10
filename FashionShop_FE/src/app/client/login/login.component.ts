import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../@core/customs/common.service';
import { LoginService } from './login.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _service: LoginService,
    private commonService: CommonService,
    private routerService: Router
  ) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  errortext: string = null;

  login(){
    if(this.username == '' || this.password == ''){
      this.errortext = "Bạn chưa nhập tài khoản hoặc mật khẩu !!!";
    } else {
      this.errortext = null;
      this._service.selectUser().subscribe(res => {
        for (const item of res) {
          if(item.userName == this.username && item.password === this.password){
            this.routerService.navigateByUrl('');
            this.commonService.toastrSuccess('Đăng nhập thành công.')
          } else {
            this.commonService.toastrDanger("Tài khoản hoặc mật khẩu không chính xác !!!");
          }
        }
      })
    }
  }

}
