import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService, ConvertDatePipe } from '../../../../../@core/customs/common.service';
import { STATUS_ACTION, SUCCESS_NOTICE } from '../../../../../@core/customs/constants';
import { Product } from '../../../../../@core/data/FashionShopApi.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'ngx-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit  {

  constructor(
    private commonService: CommonService,
    private _service: ProductService,
    @Inject(MAT_DIALOG_DATA) public dataRef:{ key: number, actionType: number },
    private dialogRef: MatDialogRef<ProductCrudComponent>
  ) { }

  statusAction = STATUS_ACTION;
  title: string = 'thông tin sản phẩm';
  target: Product = new Product();
  listStatus: Object[] = [{text: "Còn hàng",value: 1},{text: "Hết hàng", value: 0}];
  listSizeId: any[];
  listCategoryId: any[];

  ngOnInit(): void {
    if(this.dataRef.actionType !== this.statusAction.create){
      this.loadData();
    }
    
    this._service.selectSizeID().subscribe(res => {
      this.listSizeId = res;
    });

    this._service.selectCategoryID().subscribe(res => {
      this.listCategoryId = res;
    });
  }

  loadData(): void {
    //Select data User
    this._service.selectOne(this.dataRef.key).subscribe((res) => {
      if(res){
        this.target = res;
        this.target.createdDate = this.target.createdDate? new ConvertDatePipe().transform(this.target.createdDate) : null;
      } else {
        this.commonService.toastrDanger("Không tìm thấy dữ liệu !!!");
        this.dialogRef.close(true);
      }
    })
  }

  handleUpload(event: any){
    const files = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      this.target.productImage = reader.result.toString();
    };
  }

  @ViewChild('avatar') avatar: ElementRef;
  DeleteImg(){
    this.target.productImage = null;
    let input = <HTMLInputElement>document.getElementById("loadImage");
    input.value = null;
  }

  save(): void {
    this.target.createdDate = this.target.createdDate ? new Date(this.target.createdDate): null;
    if(this.dataRef.actionType === STATUS_ACTION.create){
      this._service.insert(this.target).subscribe((res) => {
        if(res){
          this.commonService.toastrSuccess(SUCCESS_NOTICE);
          this.dialogRef.close(true);
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
