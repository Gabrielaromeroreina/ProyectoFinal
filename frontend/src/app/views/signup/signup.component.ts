import { Component, OnInit } from '@angular/core';

// libreria de captura de formularios de angular
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

// servicio de usuarios
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  signup(form: NgForm) {
    let { username, email, password, confirmPassword } = form.value;

    //vericamos si los campos estan vacios
    if (!username || !email || !password || !confirmPassword ) {
      alert('Diligencie todos los campos');
      return;
    }

    //verificamos si las contraseña coinciden
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.userService.signUp({ username, email, password, confirmPassword }).subscribe(
      (data: any) => {
        alert(data.status);
        form.reset();
        this.userService.currentUser = new User();
      },
      (error) => {
        alert(error.error.status);
      }
    );
  }
}

