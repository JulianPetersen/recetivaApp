import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser, LoginUserResponse } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  user:LoginUser={
    email:"",
    password:""
  }
  constructor(private auth:AuthService,
              private global:GlobalService,
              private router:Router) { }

  ngOnInit() {
  }


  login(){
    this.auth.login(this.user)
      .subscribe({
        next:((res:LoginUserResponse) => {
          console.log(res);
          localStorage.setItem('token', res.token)
          this.router.navigateByUrl('tabs')
        }),
        error: (err) => {
          this.global.presentAlert('ERROR',err.error.message)
          console.log(err);
        }
      })
  }
}
  