import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)


  })
  
  constructor(private _router:Router){

  }

  moveToRegister(){
    this._router.navigate(['/register']);

  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }
    console.log(JSON.stringify(this.loginForm.value));


  }

}
