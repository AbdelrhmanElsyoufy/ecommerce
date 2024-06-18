import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ResponsUser } from '../auth/auth/models/ResponsUser';
import { User } from '../auth/auth/models/User';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private jwt : JwtHelperService
  ) { }


  saveToken(token : string){
    localStorage.setItem("userToken" , token);
      
    }
    
    isLoggedIn(){
      console.log(localStorage.getItem("userToken"));
      
     return localStorage.getItem("userToken") ? true : false
    }

    logout(){
      localStorage.removeItem("userToken");
    }

    userInfo(){
      var token = this.jwt.decodeToken();

      let user: ResponsUser = {
        id: token.id,
        firstName: token.firstName,
        lastName: token.lastName,
        address: token.address,
        mobile: token.mobile,
        email: token.email,
        password: '',
        createdAt: token.createdAt,
        modifiedAt: token.modifiedAt,
      };
      return user;
    }
}
