import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() view : 'list' | 'grid' | 'prevcartitem' | 'currcartitem' = 'grid'
@Input() currentProduct:Product = {
  id: 0,
  title: 'HHhhhhhhhhhhhhh',
  description: '',
  productCategory: {
    id:0,
    category:'',
    subCategory:''

  },
  offer: {
    id:0,
    discount:0,
    title:''
  },
  price: 0,
  quantity: 0,
  imageName: ''
}


constructor(
  private service : ProductsService
) {

}

finalPrice(price : number , discount : number){
  return this.service.applyDiscount(price , discount);
}
}
