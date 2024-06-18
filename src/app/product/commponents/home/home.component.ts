import { Component } from '@angular/core';
import { SuggestedProduct } from '../../models/suggested-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
suggestedProducts :SuggestedProduct[] =[
 {
  banerImage:'Baner/Baner_Mobile.png',
  category :{
    id : 1,
    category:'electronics',
    subCategory:'mobiles'
  }
 },

 {
  banerImage:'Baner/Baner_Laptop.png',
  category :{
    id : 2,
    category:'electronics',
    subCategory:'laptops'
  }
 },

 {
  banerImage:'Baner/Baner_Chair.png',
  category :{
    id : 3,
    category:'furniture',
    subCategory:'chairs'
  }
 },

 {
  banerImage:'Baner/Baner_Table.png',
  category :{
    id : 4,
    category:'furniture',
    subCategory:'tables'
  }
 },
];
}
