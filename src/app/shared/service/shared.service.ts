import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Category } from 'src/app/product/models/Category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url = 'ECommerce/categories';
  constructor( private http : HttpClient) {

   }

   getCategories(){
    return this.http.get<Category[]>(`${environment.apiUrl}`+this.url)
    .pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Category = {
            id: category.id,
            category: category.category,
            subCategory: category.subCategory,
          };
          return mappedCategory;
        })
      )
    );




   }


}
