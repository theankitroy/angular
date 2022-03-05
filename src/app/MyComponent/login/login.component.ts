import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username!:string
  constructor(private router:Router) { }
  goToSignup(){
    this.router.navigate(['/signup']);
  }
  dashboard(){
    if(this.username=='admin'){
      this.router.navigate(['/admindashboard']);
    }
    else this.router.navigate(['/userdashboard']);
  }
}
