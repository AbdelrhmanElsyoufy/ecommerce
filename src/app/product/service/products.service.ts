import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../models/Product';
import { ResponsReview } from '../models/ResponsReview';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  getAllProductsByCategory(category : string) {
    return this.http.get(environment.apiUrl+"products/categories/"+category)
  }

  constructor(
    private http : HttpClient
  ) { }



  getProducts(category:string,subCategory:string,count:number){
    return this.http.get<Product[]>(`${environment.apiUrl}`+'ECommerce/products',
   {
    params: new HttpParams()
    .set('category',category)
    .set('subCategory',subCategory)
    .set('count',count),
    })
  }


  getProductById(id:number){
    return this.http.get<Product>(`${environment.apiUrl}`+'ECommerce/product',
   {
    params: new HttpParams()
    .set('id',id)
    })
  }

applyDiscount(price :number , discount : number){
   return price - price * (discount/100);
}

  getAllCategories(){
    return this.http.get(`${environment.apiUrl}products/categories`)
  }


  sendReview(review : Review){
   return this.http.post(`${environment.apiUrl}`+'ECommerce/review',review,{responseType:'text'});
  }

  getReviews(id :number){
    return this.http.get<ResponsReview[]>(
      `${environment.apiUrl}`+'ECommerce/review',{
        params:new HttpParams().set("id",id)
      })
  }

}
