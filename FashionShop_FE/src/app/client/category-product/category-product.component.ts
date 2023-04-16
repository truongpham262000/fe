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
  p;

  ngOnInit(): void {
    this._service.selectCategory().subscribe(res => {
      this.target = [{name: 'Tất cả', categoryId: 0},...res];
    });
    this._service.selectProduct().subscribe(res => {
      this.productCategory = res;
    });
    this.selectValue = this.listSort[0].value;
  }

  listSort: any[] = [{text: 'Tất cả', value: ''},{text: 'Giá tăng dần',value: 'asc'},{text: 'Giá giảm dần',value: 'desc'}];
  selectValue: number;

  productCategory: any[];

  getDataProduct(value: number) {
    if(value === 0){
      this._service.selectProduct().subscribe(res => {
        this.productCategory = res;
      })
    } else {
      this._service.selectCategoryProduct(value).subscribe(res => {
        this.productCategory = res;
      })
    }
  }

}
