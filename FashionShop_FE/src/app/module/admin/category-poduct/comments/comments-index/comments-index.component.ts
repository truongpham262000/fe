import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION } from '../../../../../@core/customs/constants';
import { DialogConfirmComponent } from '../../../../../@theme/components/template/dialog/dialog-confirm/dialog-confirm.component';
import { CommentsCrudComponent } from '../comments-crud/comments-crud.component';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'ngx-comments-index',
  templateUrl: './comments-index.component.html',
  styleUrls: ['./comments-index.component.scss']
})
export class CommentsIndexComponent implements OnInit {
  searchText;
  p;

  constructor(
    private dialog: MatDialog,
    private _service: CommentsService,
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
    this.dialog.open(CommentsCrudComponent,
      this.commonService.configDialog("40%",{
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
    this.dialog.open(CommentsCrudComponent,
      this.commonService.configDialog("40%",{
        key: key,
        actionType: STATUS_ACTION.detail
      }))
      .afterClosed()
      .subscribe(() => {})
  }

  openEditDialog(key: number){
    this.dialog.open(CommentsCrudComponent,
      this.commonService.configDialog("40%",{
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
        message: `Bạn có chắc chắn xóa bình luận <b>${title}</b> ?`,
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
