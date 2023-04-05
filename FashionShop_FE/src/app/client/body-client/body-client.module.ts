import { BodyClientComponent } from './body-client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyClientSliderComponent } from './body-client-slider/body-client-slider.component';
import { BodyClientCategoryComponent } from './body-client-category/body-client-category.component';
import { BodyClientNewArrivalsComponent } from './body-client-new-arrivals/body-client-new-arrivals.component';
import { BodyClientDealOnWeakComponent } from './body-client-deal-on-weak/body-client-deal-on-weak.component';
import { BodyClientBestSellerComponent } from './body-client-best-seller/body-client-best-seller.component';
import { BodyClientServiceComponent } from './body-client-service/body-client-service.component';
import { BodyClientLastestBlogsComponent } from './body-client-lastest-blogs/body-client-lastest-blogs.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    BodyClientComponent,
    BodyClientSliderComponent,
    BodyClientCategoryComponent,
    BodyClientNewArrivalsComponent,
    BodyClientDealOnWeakComponent,
    BodyClientBestSellerComponent,
    BodyClientServiceComponent,
    BodyClientLastestBlogsComponent
  ],
  imports: [
    CommonModule,
    ThemeModule
  ]
})
export class BodyClientModule { }
