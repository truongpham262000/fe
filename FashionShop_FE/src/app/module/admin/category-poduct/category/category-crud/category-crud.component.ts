import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Category } from '../../../../../@core/data/FashionShopApi.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ngx-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.scss']
})
export class CategoryCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: CategoryService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<CategoryCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'danh mục';
  target: Category = new Category();
  listStatus: Object[] = [{text: "Còn hàng",value: 1},{text: "Hết hàng", value: 0}];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
  }

  loadData(): void {
    //Select data User
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
        this.target.createdDate = this.target.createdDate? new ConvertDatePipe().transform(this.target.createdDate) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.closeDialog(true)
      }
    })
  }

  save(): void {
    this.target.createdDate = this.target.createdDate ? new Date(this.target.createdDate): null;
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
