import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Coupon } from '../../../../../@core/data/FashionShopApi.service';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'ngx-coupon-crud',
  templateUrl: './coupon-crud.component.html',
  styleUrls: ['./coupon-crud.component.scss']
})
export class CouponCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: CouponService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<CouponCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'mã giảm giá sản phẩm';
  target: Coupon = new Coupon();

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
  }

  loadData(): void {
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.dialogRef.close(true);
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
          this.dialogRef.close(false);
          this.commonService.toastrDanger("Không thể thêm "+ this.title +" này !!!");
        }
      })
    } else {
      this._service.update(this.dataRef.key,this.target).subscribe((res) => {
        console.log(res)
        if(res === null){
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.dialogRef.close(true);
        } else {
          this.commonService.toastrDanger("Không thể cập nhật "+ this.title +" !!!");
          this.dialogRef.close(false)
        }
      })
    }
  }

  closeDialog(value?: boolean): void {
    this.dialogRef.close(value)
  }

}
