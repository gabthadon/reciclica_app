import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm!: FormGroup;
 

  constructor() {
   
  

   }

  ngOnInit() {

   this.myForm =  new FormGroup({
      email: new FormControl("Gabola",Validators.email),
      password: new FormControl(null,Validators.required)
      })

  }

  onSubmit(){
    console.log(this.myForm.value);
  }

}
