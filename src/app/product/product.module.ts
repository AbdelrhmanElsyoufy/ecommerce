import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './commponents/all-products/all-products.component';
import { ProductDetailsComponent } from './commponents/product-details/product-details.component';
import { ProductComponent } from './commponents/product/product.component';
import { SuggestedProductComponent } from './commponents/suggested-product/suggested-product.component';
import { HomeComponent } from './commponents/home/home.component';
import { NavToProductDetailsDirective } from '../directives/NavToProductDetails.directive';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent,
    SuggestedProductComponent,
    HomeComponent,
    NavToProductDetailsDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('userToken');
        },
        allowedDomains: ['localhost:44302'],
      },
    }),

  ],
  exports:[
    ProductComponent
  ]

})
export class ProductModule { }
