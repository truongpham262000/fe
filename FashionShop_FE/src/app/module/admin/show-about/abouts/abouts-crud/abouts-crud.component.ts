import { STATUS_ACTION, SUCCESS_NOTICE } from './../../../../../@core/customs/constants';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { AboutsService } from '../abouts.service';
import { About } from '../../../../../@core/data/FashionShopApi.service';

@Component({
  selector: 'ngx-abouts-crud',
  templateUrl: './abouts-crud.component.html',
  styleUrls: ['./abouts-crud.component.scss']
})
export class AboutsCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: AboutsService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<AboutsCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  titleAbout: string = "bài viết";
  target: About = new About();
  listStatus: Object[] = [{text: "Đang sử dụng",value: 1},{text: "Không sử dụng", value: 0}]

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    } else {
      this.target.image = null;
    }
  }
  
  loadData(): void {
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res != null){
        this.target = res;
        this.target.createdDate = this.target.createdDate ? new ConvertDatePipe().transform(this.target.createdDate) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.closeDialog(false)
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
          this.commonService.toastrDanger("Không thể thêm "+ this.titleAbout +" này !!!");
          this.dialogRef.close(false);
        }
      })
    } else {
      this._service.update(this.dataRef.key,this.target).subscribe((res) => {
        if(res === null){
          this.loadData();
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.dialogRef.close(true);
        } else {
          this.commonService.toastrDanger("Không thể cập nhật "+ this.titleAbout +" !!!");
          this.dialogRef.close(false);
        }
      })
    }
  }

  handleUpload(event: any){
    const files = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      this.target.image = reader.result.toString();
    };
  }

  @ViewChild('avatar') avatar: ElementRef;
  DeleteImg(){
    this.target.image = null;
    let input = <HTMLInputElement>document.getElementById("loadImage");
    input.value = null;
  }

  closeDialog(value){
    this.dialogRef.close(value)
  }
}
