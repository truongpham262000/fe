import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Favorite } from '../../../../../@core/data/FashionShopApi.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'ngx-favorites-crud',
  templateUrl: './favorites-crud.component.html',
  styleUrls: ['./favorites-crud.component.scss']
})
export class FavoritesCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: FavoritesService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<FavoritesCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'sản phẩm yêu thích';
  target: Favorite = new Favorite();
  listUserId: any[];
  listProductId: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }

    this._service.selectUserId().subscribe(res => {
      this.listUserId = res;
    })

    this._service.selectProductId().subscribe(res => {
      this.listProductId = res;
    })
  }

  loadData(): void {
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.closeDialog(true)
      }
    })
  }

  save(): void {
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this._service.insert(this.target).subscribe((res) => {
        if(res === null){
          this.dialogRef.close(true);
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.loadData();
        } else {
          this.closeDialog(false);
          this.commonService.toastrDanger("Không thể thêm "+ this.title +" này !!!");
        }
      })
    } else {
      this._service.update(this.dataRef.key,this.target).subscribe((res) => {
        console.log(res)
        if(res === null){
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(true);
        } else {
          this.commonService.toastrDanger("Không thể cập nhật "+ this.title +" !!!");
          this.closeDialog(false);
        }
      })
    }
  }

  closeDialog(value?: boolean): void {
    this.dialogRef.close(value)
  }

}
