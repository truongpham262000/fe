import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, PAGE_SIZE } from '../../../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { SliderCrudComponent } from '../slider-crud/slider-crud.component';
import { SliderService } from '../slider.service';

@Component({
  selector: 'ngx-slider-index',
  templateUrl: './slider-index.component.html',
  styleUrls: ['./slider-index.component.scss']
})
export class SliderIndexComponent  {
  searchText;
  p = 1;
  size = PAGE_SIZE;

  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private _service: SliderService
  ) { }

  target: any[];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this._service.selectAll().subscribe(res => {
      if(res){
        this.target = res;
      }
    });
  }

  openCreateDialog(){
    this.dialog.open(SliderCrudComponent,
      this.commonService.configDialog("50%",{
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
    this.dialog.open(SliderCrudComponent,
      this.commonService.configDialog("50%",{
        key: key,
        actionType: STATUS_ACTION.detail
      }))
      .afterClosed()
      .subscribe(() => {})
  }

  openEditDialog(key: number){
    this.dialog.open(SliderCrudComponent,
      this.commonService.configDialog("50%",{
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
        message: `Bạn có chắc chắn xóa ảnh slide <b>${title}</b> ?`,
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
