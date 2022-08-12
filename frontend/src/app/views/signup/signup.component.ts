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
    let { name, species, breed, age, weight, gender, chip, foodbrand, characteristic, sterilized, specialCondition, whichSpecialCondition, medicines, whichMedicines, vaccines, whichVaccines, userName, email, password, confirmPassword, human, cellphone, address, humanAut, cellphoneAut } = form.value;

 //vericamos si los campos estan vacios
    if (!name || !species || !breed || !age || !weight || !gender || !chip || !foodbrand || !characteristic || !sterilized || !specialCondition || !whichSpecialCondition || !medicines || !whichMedicines || !vaccines || !whichVaccines || !userName || !email || !password || !confirmPassword || !human || !cellphone || !address || !humanAut || !cellphoneAut ) {
      alert('Diligencie todos los campos');
      console.log(form.value)
      return;
    }

    //verificamos si las contraseña coinciden
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.userService.signUp({ name, species, breed, age, weight, gender, chip, foodbrand, characteristic, sterilized, specialCondition, whichSpecialCondition, medicines, whichMedicines, vaccines, whichVaccines, userName, email, password, confirmPassword, human, cellphone, address, humanAut, cellphoneAut }).subscribe(
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

