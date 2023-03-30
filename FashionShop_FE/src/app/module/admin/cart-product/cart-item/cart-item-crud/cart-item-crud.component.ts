import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { CartItem } from '../../../../../@core/data/FashionShopApi.service';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'ngx-cart-item-crud',
  templateUrl: './cart-item-crud.component.html',
  styleUrls: ['./cart-item-crud.component.scss']
})
export class CartItemCrudComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private _service: CartItemService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<CartItemCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'chi tiết sản phẩm';
  target: CartItem = new CartItem();
  listProductId: any[];
  listCartId: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }

    this._service.selectProductId().subscribe(res => {
      this.listProductId = res;
    });

    this._service.selectCartId().subscribe(res => {
      this.listCartId = res;
    });
  }

  loadData(): void {
    //Select data User
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
        this.target.createAt = this.target.createAt? new ConvertDatePipe().transform(this.target.createAt) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.dialogRef.close(true);
      }
    })
  }

  save(): void {
    this.target.createAt = this.target.createAt ? new Date(this.target.createAt): null;
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
        console.log(res)
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
