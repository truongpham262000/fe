import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../@core/customs/common.service';
import { ROLE_ACTION } from '../../../@core/customs/constants';
import { User } from '../../../@core/data/FashionShopApi.service';
import { HeaderClientService } from './header-client.service';

@Component({
  selector: 'ngx-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {

  constructor(
    private _service: HeaderClientService,
    private commonService: CommonService
  ) { }
  user = (localStorage.getItem('login') !== '')? localStorage.getItem('login') : null;
  target: User = new User();
  roleAction = ROLE_ACTION;
  ngOnInit(): void {
    this._service.selectUser(parseInt(this.user)).subscribe(res  => {
      if(res !== null) {
        this.target = res;
      } else {
        this.commonService.toastrDanger("Bạn chưa đăng nhập tài khoản của mình.");
      }
    })
  }

  deleteToken(){
    localStorage.removeItem('login')
  }

  

}
