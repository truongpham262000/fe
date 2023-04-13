import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites.service";

@Component({
  selector: "ngx-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent implements OnInit {
  constructor(private _service: FavoritesService) {}
  target: any[];

  ngOnInit(): void {
    this._service.selectCategory().subscribe((res) => {
      this.target = [{ name: "Tất cả", categoryId: 0 }, ...res];
    });
    this._service.selectProduct().subscribe((res) => {
      this.productCategory = res;
    });
    this.selectValue = this.listSort[0].value;
  }

  listSort: any[] = [
    { text: "Giá tăng dần", value: 0 },
    { text: "Giá giảm dần", value: 1 },
  ];
  selectValue: number;

  productCategory: any[];

  getDataProduct(value: number) {
    if (value === 0) {
      this._service.selectProduct().subscribe((res) => {
        this.productCategory = res;
      });
    } else {
      this._service.selectCategoryProduct(value).subscribe((res) => {
        this.productCategory = res;
      });
    }
  }
}
