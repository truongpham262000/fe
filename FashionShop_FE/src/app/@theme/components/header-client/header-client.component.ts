import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {

  constructor() { }
  user = (localStorage.getItem('login') !== '')? localStorage.getItem('login') : null;
  ngOnInit(): void {
    
  }

  deleteToken(){
    localStorage.removeItem('login')
  }

  

}
