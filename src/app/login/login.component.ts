import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
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
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login(credentials: UserCredentials){
    //Validate form

    if(this.userAuthentication.authenticateUser(credentials)){
      this.router.navigate(['/facts']);
    }
  }

}
