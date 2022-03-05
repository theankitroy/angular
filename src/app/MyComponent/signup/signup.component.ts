import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();

  constructor(private userService:UsersService, private router:Router) { 
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      username:new FormControl(null,[Validators.required]),
      phone:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      cpassword:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(12)])
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    // this.user.email_id=String(this.user.email_id);
    console.log(this.user);
    
    this.saveUser();

  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToLogin();
    },
    error=>console.log(error)
    
    );
  }
goToLogin(){
  alert("You're registered");
  this.router.navigate(['/login']);
}

loginForm:FormGroup;



}
