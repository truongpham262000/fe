import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../../@core/customs/common.service";
import { FavoritesService } from "./favorites.service";

@Component({
  selector: "ngx-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent implements OnInit {

  constructor(
    private _service: FavoritesService,
    private commonService: CommonService,
    private routes: Router  
  ) {}
  target: any[];
  selectValue: number;
  productCategory: any[];

  userID = localStorage.getItem("login") ? localStorage.getItem("login") : null;

  ngOnInit(): void {
    this._service.selectCategory().subscribe((res) => {
      this.target = [{ name: "Tất cả", categoryId: 0 }, ...res];
    });

    if(this.userID  !== null) {
      this._service.selectFavorites(parseInt(this.userID.toString())).subscribe((res) => {
        this.productCategory = res;
      });
    } else {
      this.productCategory = [];
    }
      
    this.selectValue = this.listSort[0].value;
  }

  listSort: any[] = [{text: 'Tất cả', value: ''},{text: 'Giá tăng dần',value: 'asc'},{text: 'Giá giảm dần',value: 'desc'}];

  getDataProduct(value: number) {
    if(this.userID !== null) {
      if (value === 0) {
        this._service.selectFavorites(parseInt(this.userID.toString())).subscribe((res) => {
          this.productCategory = res;
        });
      } else {
        this._service.selectFavorites(parseInt(this.userID.toString()),value).subscribe((res) => {
          this.productCategory = res;
          console.log(res)
        });
      }
    } else {
      this.productCategory = [];
    }
  }

  detailProduct(id: number) {
    if(this.userID !== null){
      this.routes.navigate(["/product-details", id]);
    } else {
      this.routes.navigateByUrl("/login");
    }
  }
}