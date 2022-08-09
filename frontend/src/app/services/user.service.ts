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

   signUp(formUser: any){
    return this.http.post(`${this.URI_USERS_BACKEND}/signup`, formUser)
  }

   loggedIn(){
    return localStorage.getItem('token') ? true:false
  }

  logout(){
   localStorage.removeItem('token')
   this.router.navigate(['/login'])
   return
  }
}