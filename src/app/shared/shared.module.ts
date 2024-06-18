import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './commponents/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth/auth.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavToProductsDirective } from '../directives/nav-to-products.directive';
import { FooterComponent } from './commponents/footer/footer.component';





@NgModule({
  declarations: [
    HeaderComponent,
    NavToProductsDirective,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
