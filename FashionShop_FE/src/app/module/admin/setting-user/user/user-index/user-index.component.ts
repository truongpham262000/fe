import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonService } from '../../../../../@core/customs/common.service';
import { User } from '../../../../../@core/data/FashionShopApi.service';

@Component({
  selector: 'ngx-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _service: UserService,
    private commonService: CommonService
  ) { }

  target: any[];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this._service.selectAll().subscribe(res => {
      this.target = res;
      console.log("User: "+res)
    })
  }

}
