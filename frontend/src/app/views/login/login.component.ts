import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService, public router:Router ) { }

  ngOnInit(): void {
    this.userService.currentUser = new User()
  }
    login(form:NgForm){
    let {email, password}= form.value
    if(!email || !password){
      alert("Debe diligenciar todos los campos")
      return
    }
   }

}