import { Component, OnInit } from '@angular/core';
import { Slider } from '../../../@core/data/FashionShopApi.service';
import { BodyClientService } from '../body-client.service';

@Component({
  selector: 'ngx-body-client-slider',
  templateUrl: './body-client-slider.component.html',
  styleUrls: ['./body-client-slider.component.scss']
})
export class BodyClientSliderComponent implements OnInit {

  constructor(private _service: BodyClientService) { }
  target: Slider[] = [];
  ngOnInit(): void {
    this._service.selectAllSlider().subscribe(res => {
      this.target = res;
    })
  }

}
