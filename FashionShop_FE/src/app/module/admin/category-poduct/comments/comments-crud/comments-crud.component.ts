import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Comment } from '../../../../../@core/data/FashionShopApi.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'ngx-comments-crud',
  templateUrl: './comments-crud.component.html',
  styleUrls: ['./comments-crud.component.scss']
})
export class CommentsCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: CommentsService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<CommentsCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'bình luận';
  target: Comment = new Comment();
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
        this.target.createAt = this.target.createAt? new ConvertDatePipe().transform(this.target.createAt) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.closeDialog(true)
      }
    })
  }

  save(): void {
    this.target.createAt = this.target.createAt ? new Date(this.target.createAt): null;
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this._service.insert(this.target).subscribe((res) => {
        if(res === null){
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.closeDialog(true);
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
