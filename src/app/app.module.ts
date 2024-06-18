import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { CartsModule } from './carts/carts.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductModule,
    CartsModule,
    AuthModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
