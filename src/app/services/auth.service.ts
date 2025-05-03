import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, LoginUserResponse, RegisterResponse, RegisterUser } from '../models/user';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private global:GlobalService) { }

  register(user:RegisterUser){
    let params = new HttpParams()
    .set('platform', 'mobile')
    return this.http.post<RegisterResponse>(`${this.global.URL}/auth/signup`, user,{ params })
  }


  login(user:LoginUser){
    return this.http.post<LoginUserResponse>(`${this.global.URL}/auth/signin`,user)
  }
}
