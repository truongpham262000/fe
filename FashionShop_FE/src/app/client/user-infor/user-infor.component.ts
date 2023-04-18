import { HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../@core/customs/common.service';
import { User } from '../../@core/data/FashionShopApi.service';
import { UserInforService } from './user-infor.service';

@Component({
  selector: 'ngx-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.scss']
})
export class UserInforComponent implements OnInit {

  constructor(
    private _service: UserInforService,
    private commonService: CommonService,
    private routes: Router
  ) { }

  UserID = (localStorage.getItem('login') !== null) ? localStorage.getItem('login') : null;
  target: User = new User();

  ngOnInit(): void {
      if(this.UserID === null){
        this.routes.navigateByUrl("/login");
      } else {
        this._service.selectUserInfor(parseInt(this.UserID)).subscribe(res => {
          this.target = res;
        })
      }
  }

}
