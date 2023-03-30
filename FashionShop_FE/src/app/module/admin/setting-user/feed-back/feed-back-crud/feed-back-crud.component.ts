import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { FeedBack } from '../../../../../@core/data/FashionShopApi.service';
import { FeedBackService } from '../feed-back.service';

@Component({
  selector: 'ngx-feed-back-crud',
  templateUrl: './feed-back-crud.component.html',
  styleUrls: ['./feed-back-crud.component.scss']
})
export class FeedBackCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: FeedBackService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<FeedBackCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'phản hồi';
  target: FeedBack = new FeedBack();
  listStatus: Object[] = [{text: "Đã phản hồi",value: 1},{text: "Chưa phản hồi", value: 0}];
  listUser: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }

    this._service.selectUser().subscribe((res) => {
      this.listUser = res;
    });
  }

  loadData(): void {
    //Select data FeedBack
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
        this.target.createdDate = this.target.createdDate ? new ConvertDatePipe().transform(this.target.createdDate) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.dialogRef.close(true)
      }
    })
  }

  save(): void {
    this.target.createdDate = this.target.createdDate ? new Date(this.target.createdDate) : null;
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this._service.insert(this.target).subscribe((res) => {
        if(res === null){
          this.dialogRef.close(true);
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.loadData();
        } else {
          this.commonService.toastrDanger("Không thể thêm "+ this.title +" này !!!");
          this.dialogRef.close(false);
        }
      })
    } else {
      this._service.update(this.dataRef.key,this.target).subscribe((res) => {
        if(res === null){
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.dialogRef.close(true);
        } else {
          this.commonService.toastrDanger("Không thể cập nhật "+ this.title +" !!!");
          this.dialogRef.close(false);
        }
      })
    }
  }

  closeDialog(value?: boolean): void {
    this.dialogRef.close(value)
  }

}
