import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { use } from 'echarts';

@Component({
  selector: 'ngx-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {

  constructor() { }
  user = (localStorage.getItem('token') !== '')? localStorage.getItem('token') : null;
  ngOnInit(): void {
    console.log(this.user)
  }

  deleteToken(){
    localStorage.removeItem('token')
  }

  

}
