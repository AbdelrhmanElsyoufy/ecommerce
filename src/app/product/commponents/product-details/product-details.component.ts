import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/utilityService/utility.service';
import { Product } from '../../models/Product';
import { ResponsReview } from '../../models/ResponsReview';
import { Review } from '../../models/Review';
import { ProductsService } from '../../service/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
 imageIndex = 1;
 product! : Product
 reviewControl  = new FormControl('');
 reviewError = false;
 reviewSaved = false;
 otherReviews : ResponsReview[] = []
 constructor(
  private actived :ActivatedRoute,
  private service : ProductsService ,
  public utilityService : UtilityService,
  ) {
 }

 ngOnInit(){
  this.actived.queryParams.subscribe((parms : any) =>{
    const prdId = parms.id;
   this.service.getProductById(prdId).subscribe((res)=>{
    this.product = res;
    this.reviews(this.product.id)
   })


  })
 }


 finalPrice(price : number , discount : number){
   return this.service.applyDiscount(price , discount);

 }

 
submitReview(){
  if(this.GetReviwe == ''  || this.GetReviwe == null){
    this.reviewError = true;
    return;
  }

  const review : Review = {
    userId: this.utilityService.userInfo().id,
    productId: this.product.id,
    value: this.GetReviwe
  }
  
  this.service.sendReview(review).subscribe((res:any)=>{
    if(res != "Invaild"){
      this.reviews(this.product.id)

       this.reviewSaved =true;
    }
  })

}


private reviews(id : number){
   this.service.getReviews(id)
   .subscribe(res =>{
    this.otherReviews = res;
   })
}
get GetReviwe(){
  return this.reviewControl.value;
}

}
