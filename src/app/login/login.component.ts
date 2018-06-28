import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserAuthenticationService } from '../user/user-authentication.service';

interface UserCredentials {
  username: string, 
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private router: Router, private userAuthentication: UserAuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(8)])
    })
  }

  login(credentials: UserCredentials){
    //Validate form

    if(this.userAuthentication.authenticateUser(credentials)){

      this.router.navigate(['/facts']);
    }
  }

  cancel(): void {
    this.router.navigate(['/facts']);
  }

}
