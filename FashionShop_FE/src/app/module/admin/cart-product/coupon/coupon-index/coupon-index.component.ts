import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { PAGE_SIZE, STATUS_ACTION } from '../../../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { CouponCrudComponent } from '../coupon-crud/coupon-crud.component';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'ngx-coupon-index',
  templateUrl: './coupon-index.component.html',
  styleUrls: ['./coupon-index.component.scss']
})
export class CouponIndexComponent implements OnInit {
  searchText;
  p = 1;
  size = PAGE_SIZE;

  constructor(
    private dialog: MatDialog,
    private _service: CouponService,
    private commonService: CommonService
  ) { }

  target: any[];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this._service.selectAll().subscribe(res => {
      this.target = res;
    });
  }

  openCreateDialog(){
    this.dialog.open(CouponCrudComponent,
      this.commonService.configDialog("30%",{
        key: null,
        actionType: STATUS_ACTION.create
      })
    )
    .afterClosed()
    .subscribe((res) => {
      if(res){
        this.loadData();
      }
    })
  }

  openDetailDialog(key: number){
    this.dialog.open(CouponCrudComponent,
      this.commonService.configDialog("30%",{
        key: key,
        actionType: STATUS_ACTION.detail
      }))
      .afterClosed()
      .subscribe(() => {})
  }

  openEditDialog(key: number){
    this.dialog.open(CouponCrudComponent,
      this.commonService.configDialog("30%",{
        key: key,
        actionType: STATUS_ACTION.edit
      }))
      .afterClosed()
      .subscribe(res => {
        if(res){
          this.loadData();
        }
      })
  }

  openDeleteDialog(key: number,title?: string){
    this.dialog.open(DialogConfirmComponent,
      this.commonService.configDialog("30%",{
        title: 'Xác nhận',
        message: `Bạn có chắc chắn xóa mã giảm giá <b>${title}</b> ?`,
        color: 'text-warning',
        type: 1,
        icon: 'exclamation-triangle',
        isAppend: true
      }))
      .afterClosed().subscribe((dialog) => {
        if(dialog){
          this._service.delete(key).subscribe((res) => {
            if(res == null){
              this.commonService.toastrSuccess();
              this.loadData();
            } else {
              this.commonService.toastrDanger("Không xóa được !!!");
            }
          })
        }
      })
  }

}
