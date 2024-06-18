import { Component, Input } from '@angular/core';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-suggested-product',
  templateUrl: './suggested-product.component.html',
  styleUrls: ['./suggested-product.component.scss']
})
export class SuggestedProductComponent {
@Input() count = 3;
@Input() category : Category={
  id: 0,
  category: '',
  subCategory: ''
}

products : Product[] =[]
constructor(private service : ProductsService) {


}

ngOnInit(){
  this.getProducts();
}
getProducts(){
  this.service.getProducts(this.category.category,this.category.subCategory,this.count).subscribe(res =>{
    console.log(res);
    this.products =res
   })

}
}
