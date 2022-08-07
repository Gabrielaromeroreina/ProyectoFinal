import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 
import { Router } from '@angular/router';
//cliente http de angular para hacer perticiones de htpp
import { HttpClient, HttpHandler } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User
  URI_USERS_BACKEND = "http://localhost:5000/api/users"

  constructor(public http: HttpClient, public router: Router) { 
    this.currentUser= new User
  }
  
  login(credentials:any){
   return this.http.post(`${this.URI_USERS_BACKEND}/login`, credentials)
  }


}