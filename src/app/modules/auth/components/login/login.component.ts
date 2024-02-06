import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('myForm') myForm?: NgForm;

    constructor(private router:Router){}

    nextPage(){
  
      this.router.navigate(["home"]);
    }
    goRegister(){
      this.router.navigate(["/register"]);
    }
}
