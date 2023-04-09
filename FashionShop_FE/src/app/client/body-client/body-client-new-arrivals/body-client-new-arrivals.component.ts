import { Component, OnInit } from '@angular/core';
import { Product } from '../../../@core/data/FashionShopApi.service';
import { BodyClientService } from '../body-client.service';

@Component({
  selector: 'ngx-body-client-new-arrivals',
  templateUrl: './body-client-new-arrivals.component.html',
  styleUrls: ['./body-client-new-arrivals.component.scss']
})
export class BodyClientNewArrivalsComponent implements OnInit {

  constructor(private _service: BodyClientService) { }
  target: Product[] = [];
  targetMen: Product[] = [];
  targetWoment: Product[] = [];
  targetAccesstories: Product[] = [];

  ngOnInit(): void {
    this._service.selectProduct().subscribe(res => {
      this.target = res;
      for (const item of res) {
        if(item.categoryId == 1){
          this.targetMen.push(item);
        }
        if(item.categoryId == 2){
          this.targetWoment.push(item);
        }
        if(item.categoryId == 17){
          this.targetAccesstories.push(item);
        }
      }
    })
  }

}
