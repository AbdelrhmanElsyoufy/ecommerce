import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { elementAt } from 'rxjs';
import { LoginComponent } from 'src/app/auth/auth/compontents/login/login.component';
import { RegisterComponent } from 'src/app/auth/auth/compontents/register/register.component';
import { AuthService } from 'src/app/auth/auth/services/auth.service';
import { Category } from 'src/app/product/models/Category';
import { UtilityService } from 'src/app/utilityService/utility.service';
import { NavigationItem } from '../../models/NavigationItem';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild("modalTitle") modalTitle! : ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  navigationList: NavigationItem[] = [];
  dropdownIsOpen = false

  categories : Category[] = []

  constructor(
    private  service : SharedService,
    public utilityService: UtilityService
  ) {


  }

  ngOnInit(){
   this.getCategories();
  }

  OpenModal(component : string){
    let modal = document.getElementById("AccountModal");
    if(modal != null){
      modal.style.display = 'block';
    }
    if(component == "login"){
      this.modalTitle.nativeElement.textContent = "Enter Login Information";
      this.container.createComponent(LoginComponent);
    }
    else if(component == 'register'){
      this.modalTitle.nativeElement.textContent = "Enter Register Information";
      this.container.createComponent(RegisterComponent);
    }
  }

  CloseModal(){
    let modal = document.getElementById("AccountModal");
    if(modal != null){
      modal.style.display = 'none';
      this.container.clear();
    }
  }

  getCategories(){
    this.service.getCategories().subscribe((list: Category[]) => {
      for (let item of list) {
        let present = false;
        for (let navItem of this.navigationList) {
          if (navItem.category === item.category) {
            navItem.subcategories.push(item.subCategory);
            present = true;
          }
        }
        if (!present) {
          this.navigationList.push({
            category: item.category,
            subcategories: [item.subCategory],
          });
        }
      }
    });
  }

  dropdown(){
    const dropdown = document.getElementById('dropdown-menu');
    if(dropdown != null){
      dropdown.style.display = this.dropdownIsOpen == true ? 'none' : 'block';
     // dropdown.setAttribute('data-bs-toggle','dropdown')
      this.dropdownIsOpen = !this.dropdownIsOpen;
    }
  }
}
