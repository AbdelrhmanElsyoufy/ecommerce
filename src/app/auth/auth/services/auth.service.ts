import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Login } from '../models/login';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http : HttpClient
) { }


register(user : User){
  return this.http.post(`${environment.apiUrl}`+'Auth/register', user , { responseType: 'text' })
}


login(login : Login){
  return this.http.post(`${environment.apiUrl}`+'Auth/login', login , { responseType: 'text' })
}



}
