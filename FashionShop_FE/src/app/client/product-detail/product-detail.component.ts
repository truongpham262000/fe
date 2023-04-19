import { CommonService } from './../../@core/customs/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './product-detail.service';
import { Product, SizeProduct } from '../../@core/data/FashionShopApi.service';

@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private routesActive: ActivatedRoute,
    private commonService: CommonService,
    private _service: ProductDetailService
  ) { }

  target: Product = new Product();
  sizeProduct: SizeProduct[];

  ngOnInit(): void {
    var idProduct = Number(this.routesActive.snapshot.params['id']);
    this._service.selectProduct(idProduct).subscribe(res => {
      this.target = res;
    })

    this._service.selectSize().subscribe(res => {
      if(res){
        this.sizeProduct = res;
      }
    })
  }

  save() {

  }

}
