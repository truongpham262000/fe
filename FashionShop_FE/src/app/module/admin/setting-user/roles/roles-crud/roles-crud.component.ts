import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Role } from '../../../../../@core/data/FashionShopApi.service';
import { RolesService } from '../roles.service';

@Component({
  selector: 'ngx-roles-crud',
  templateUrl: './roles-crud.component.html',
  styleUrls: ['./roles-crud.component.scss']
})
export class RolesCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: RolesService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<RolesCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'quyền';
  target: Role = new Role();

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
  }

  loadData(): void {
    //Select data Roles
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.dialogRef.close(true)
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
          this.commonService.toastrDanger("Không thể thêm "+ this.title +" này !!!");
          this.dialogRef.close(false);
        }
      })
    } else {
      this._service.update(this.dataRef.key,this.target).subscribe((res) => {
        if(res === null){
          this.dialogRef.close(true);
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
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
