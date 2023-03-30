import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Sale } from '../../../../../@core/data/FashionShopApi.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'ngx-sales-crud',
  templateUrl: './sales-crud.component.html',
  styleUrls: ['./sales-crud.component.scss']
})
export class SalesCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: SalesService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<SalesCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'mã khuyến mãi';
  target: Sale = new Sale();
  listStatus: Object[] = [{text: "Còn hạn sử dụng",value: 1},{text: "Hết hạn sử dụng", value: 0}];
  listProductId: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }

    this._service.selectProductId().subscribe(res => {
      this.listProductId = res;
    })
  }

  loadData(): void {
    //Select data Sale
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
        this.target.startDate = this.target.startDate? new ConvertDatePipe().transform(this.target.startDate) : null;
        this.target.endDate = this.target.endDate? new ConvertDatePipe().transform(this.target.endDate) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.dialogRef.close(true)
      }
    })
  }

  save(): void {
    this.target.startDate = this.target.startDate ? new Date(this.target.startDate): null;
    this.target.endDate = this.target.endDate ? new Date(this.target.endDate): null;
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this._service.insert(this.target).subscribe((res) => {
        if(res === null){
          this.dialogRef.close(true);
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.loadData()
        } else {
          this.dialogRef.close(false);
          this.commonService.toastrDanger("Không thể thêm "+ this.title +" !!!");
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
