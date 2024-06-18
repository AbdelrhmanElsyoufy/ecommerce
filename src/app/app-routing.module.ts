import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/auth/compontents/register/register.component';
import { CartComponent } from './carts/commponents/cart/cart.component';
import { OrderComponent } from './carts/commponents/order/order.component';
import { AllProductsComponent } from './product/commponents/all-products/all-products.component';
import { HomeComponent } from './product/commponents/home/home.component';
import { ProductDetailsComponent } from './product/commponents/product-details/product-details.component';
import { ProductComponent } from './product/commponents/product/product.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"product" , component:ProductComponent},
  {path:"details" , component:ProductDetailsComponent},
  {path:"cart" , component:CartComponent},
  {path:"home" , component:HomeComponent},
  {path:"orders" , component:OrderComponent},
  {path:"register" , component:RegisterComponent},
  {path:"**" , redirectTo:"products",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
