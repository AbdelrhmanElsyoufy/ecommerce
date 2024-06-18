import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './commponents/cart/cart.component';
import { ProductModule } from '../product/product.module';
import { ProductComponent } from '../product/commponents/product/product.component';
import { OrderComponent } from './commponents/order/order.component';



@NgModule({
  declarations: [
    CartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    ProductModule
    ]
})
export class CartsModule { }
