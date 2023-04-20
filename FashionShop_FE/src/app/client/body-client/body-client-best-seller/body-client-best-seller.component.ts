import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../@core/data/FashionShopApi.service';
import { BodyClientService } from '../body-client.service';

@Component({
  selector: 'ngx-body-client-best-seller',
  templateUrl: './body-client-best-seller.component.html',
  styleUrls: ['./body-client-best-seller.component.scss']
})
export class BodyClientBestSellerComponent implements OnInit {

  constructor(
    private _service: BodyClientService,
    private routes: Router
  ) { }
  target: Product[] = [];
  UserId: number = localStorage.getItem("login") !== null ? parseInt(localStorage.getItem("login")) : null;

  ngOnInit(): void {
    this._service.selectProduct().subscribe(res => {
      this.target = res;
    })
  }

  detailProduct(id: number) {
    if(this.UserId !== null){
      this.routes.navigate(["/product-details", id]);
    } else {
      this.routes.navigateByUrl("/login");
    }
  }

}
