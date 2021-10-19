import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/Services/user-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserServiceService, private snack:MatSnackBar) {}

  hide=true;

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    userName : new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+[ ]?[a-zA-Z]+[ ]?[a-zA-Z]+[ ]?[a-zA-Z]+')]),
    userEmail : new FormControl('', [Validators.required, Validators.email]),
    userMobile : new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    userPassword : new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  get userName()
  {
    return this.registerForm.get('userName');
  }

  get userEmail()
  {
    return this.registerForm.get('userEmail');
  }

  get userMobile()
  {
    return this.registerForm.get('userMobile');
  }

  get userPassword()
  {
    return this.registerForm.get('userPassword');
  }


  submitForm()
{
    this.userService.creatUser(this.registerForm.value).subscribe(
      (data)=>{
        this.snack.open("Registration Successfully Done", "Ok", {
          duration: 7000,
        });
      },
      (error)=>{
        this.snack.open ("Oops!!! Somthing Went Wrong...", "Ok", {
          duration: 7000,
        });
      }
    )
  }
}
