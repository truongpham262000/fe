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

  ngOnInit(): void {
    this._service.selectProduct().subscribe(res => {
      this.target = res;
    })
  }

}
