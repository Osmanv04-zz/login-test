import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

const ADMIN = 
 {
    email: 'admin@admin.com',
    password: 'password'
  }


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;

  constructor(
    formBuilder: FormBuilder,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {
    localStorage.setItem('isLogged','0');
    this.loginForm = formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  get email(): any {
    return this.loginForm?.get('email');
  }

  get password(): any{
    return this.loginForm?.get('password');
  }
  
  ngOnInit(): void {
  }

  loginUser(){
    if(this.email.value == ADMIN.email && this.password.value == ADMIN.password){
      this.router.navigate(['employee'])
      localStorage.setItem('isLogged','1');
    }
    else{
      this._snackBar.open('El usuario o contraseña es incorrecto');
    }
  }

}
