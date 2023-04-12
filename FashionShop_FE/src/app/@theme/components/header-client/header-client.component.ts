import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {

  constructor() { }
  user = (localStorage.getItem('token') !== '')? localStorage.getItem('token') : null;
  ngOnInit(): void {
  }

  deleteToken(){
    localStorage.removeItem('token')
  }

  

}
