import { Component, OnInit } from '@angular/core';
import { Product } from '../../../@core/data/FashionShopApi.service';
import { BodyClientService } from '../body-client.service';

@Component({
  selector: 'ngx-body-client-best-seller',
  templateUrl: './body-client-best-seller.component.html',
  styleUrls: ['./body-client-best-seller.component.scss']
})
export class BodyClientBestSellerComponent implements OnInit {

  constructor(private _service: BodyClientService) { }
  target: Product[] = [];

  ngOnInit(): void {
    this._service.selectProduct().subscribe(res => {
      this.target = res;
    })
  }

}
