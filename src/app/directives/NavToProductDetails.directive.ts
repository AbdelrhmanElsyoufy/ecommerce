import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appNavToProductDetails]'
})
export class NavToProductDetailsDirective {

  @Input() productId: number = 0;
  @HostListener('click') openProductDetails() {
    window.scrollTo(0, 0);
    this.router.navigate(['/details'], {
      queryParams: {
        id: this.productId,
      },
    });
  }
  constructor(private router: Router) {}
}
