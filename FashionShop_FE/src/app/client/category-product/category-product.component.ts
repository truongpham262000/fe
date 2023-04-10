import { Component, OnInit } from '@angular/core';
import { Category } from '../../@core/data/FashionShopApi.service';
import { CategoryProductService } from './category-product.service';

@Component({
  selector: 'ngx-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {

  constructor(private _service: CategoryProductService) { }
  target: any[];

  ngOnInit(): void {
    this._service.selectCategory().subscribe(res => {
      this.target = [{name: 'Tất cả'},...res];
    })
  }

  productCategory: any[];

  getProduct(value: number): void {

  }

}
