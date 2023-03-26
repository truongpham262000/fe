import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION } from '../../../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { FeedBackCrudComponent } from '../feed-back-crud/feed-back-crud.component';
import { FeedBackService } from '../feed-back.service';

@Component({
  selector: 'ngx-feed-back-index',
  templateUrl: './feed-back-index.component.html',
  styleUrls: ['./feed-back-index.component.scss']
})
export class FeedBackIndexComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _service: FeedBackService,
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
    this.dialog.open(FeedBackCrudComponent,
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
    this.dialog.open(FeedBackCrudComponent,
      this.commonService.configDialog("50%",{
        key: key,
        actionType: STATUS_ACTION.detail
      }))
      .afterClosed()
      .subscribe(() => {})
  }

  openEditDialog(key: number){
    this.dialog.open(FeedBackCrudComponent,
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
        message: `Bạn có chắc chắn xóa phản hồi <b>${title}</b> ?`,
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
