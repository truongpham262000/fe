import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-module',
  styleUrls: ['./module.component.scss'],
  templateUrl: './module.component.html'
})
export class ModuleComponent  {
  menu = MENU_ITEMS;
  constructor() { }
}
