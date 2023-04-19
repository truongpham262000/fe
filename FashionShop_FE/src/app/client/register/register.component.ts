import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../@core/customs/common.service';
import { User } from '../../@core/data/FashionShopApi.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _service: RegisterService,
    private commonService: CommonService,
    private routes: Router
  ) { }

  selectUser: User = new User();
  listGender: any[] = [{text: "Nam", value: 1}, {text: "Nữ", value: 0}];
  listData: any[];
  checkPassWord: string;

  ngOnInit(): void {
    this.selectUser.gender = this.listGender[0].value;
    this._service.selectUser().subscribe(res => {
      this.listData = res;
    })
  }

  save() {
    if(this.listData.find(x => x.userName === this.selectUser.userName)){
      this.commonService.toastrDanger("Tài khoản này đã có người đăng ký");
    } else if(this.listData.find(x =>x.email === this.selectUser.email)){
      this.commonService.toastrDanger("Email của bạn đã đăng ký tài khoản khác.");
    } else if(this.checkPassWord !== this.selectUser.password){
      this.checkPassWord = null;
      this.commonService.toastrDanger("Mật khẩu nhập lại không chính xác.");
    } else {
      this._service.addUser(this.selectUser).subscribe(res => {
        if(res === null){
          this.commonService.toastrSuccess("Đăng ký thành công.");
          this.routes.navigateByUrl("/login");
        } else {
          this.commonService.toastrDanger("Không thể thêm mới người dùng.")
        }
      })
    }
  }

}
