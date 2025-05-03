import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterResponse, RegisterUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false  
})
export class RegisterPage implements OnInit {

  constructor(private router: Router,private auth:AuthService,private global:GlobalService) {}
  user:RegisterUser={
    email:"",
    password:"",
    repeatPassword:""
  };

  ngOnInit(): void {
    
  }

 async registerUser(){
    if( await this.validateData()){
      this.auth.register(this.user)
      .subscribe({
        next:((res:RegisterResponse) => {
          console.log(res)
          localStorage.setItem('token',res.token)
          this.router.navigateByUrl('tabs')
        }),
        error:((err) => {
          console.log(err);
        })
      })
    }
    
  }


  async validateData(){
    if(this.user.email == "" || this.user.email == undefined) {
      this.global.presentAlert('ERROR', 'No puedes dejar el campo email vacío')
      return false;
    }
    if(this.user.password == "" || this.user.password == undefined){
      this.global.presentAlert('ERROR', 'Ingresa una contraseña para poder continuar')
      return false
    }
    if(this.user.repeatPassword == "", this.user == undefined){
      this.global.presentAlert('ERROR', 'no puede dejar el campo confirmar contraseña vacio')
      return false
    }
    if(this.user.password != this.user.repeatPassword){
      this.global.presentAlert("ERRPR", 'las contraseñas ingresadas no coinciden')
      return false
    }
    if(!this.global.isEmailValido(this.user.email)){
      this.global.presentAlert('ERROR', 'El email ingresado no tiene formato de mail')
      return false
    }
    return true
  }
}


