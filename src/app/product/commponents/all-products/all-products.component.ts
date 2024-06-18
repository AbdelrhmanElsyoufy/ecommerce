import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductsService } from '../../service/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent  implements OnInit{

   view : 'grid' | 'list' = 'list'
   sortBy : 'default'|'lth'|'htl'='default'
  products!:Product[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private service : ProductsService
  ) {


  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let category = params.category;
      let subcategory = params.subcategory;
      if (category && subcategory)
        this.getProducts(category , subcategory)
    });

    // this.getCategories()
  }

  getProducts(category :string, subcategory : string){
    this.service.getProducts(category,subcategory,5).subscribe(res =>{
      this.products =res
     })

  }


  sortProducts(action :string){

    this.products.sort((a, b) => {
      if (action === 'default') {
        return a.id > b.id ? 1 : -1;
      }
      return (
        (action === 'htl' ? 1 : -1) *
        (this.service.applyDiscount(a.price, a.offer.discount) >
        this.service.applyDiscount(b.price, b.offer.discount)
          ? -1
          : 1)
      );
    });

  }

  // filterByCategory(event : any){
  //   let cat = event.target.value;
  //   console.log(cat);
  //   if(cat == "All"){
  //     this.getProducts
  //   }
  //   else{
  //   //  this.ProductsByCategory(cat);
  //   }

  // }

  // ProductsByCategory(category : string){
  //   this.service.getAllProductsByCategory(category).subscribe(res =>{
  //     this.products =res
  //    })
  // }
}
