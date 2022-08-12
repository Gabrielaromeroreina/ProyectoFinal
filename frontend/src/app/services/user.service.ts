import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 
import { Router } from '@angular/router';
//cliente http de angular para hacer perticiones de htpp
import { HttpClient, HttpHandler } from '@angular/common/http';

import jwtDecode from 'jwt-decode';

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
<<<<<<< HEAD
=======

  isAdmin(){
    const data = this.decodeToken()
    const isAdmin = data.role

    if(isAdmin === "admin"){
      return true
    }
    return false
  }

  decodeToken(): any{
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token ? token : "Error en token")
    return decoded
  }
>>>>>>> laura
}