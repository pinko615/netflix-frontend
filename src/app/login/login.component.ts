import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginUser = {
    email: null,
    password: null
  };

  userEmail: string;

  users: any = [];


  constructor(private auth: AuthService,
              private router: Router,
              private usersService: UsersService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginUser(this.loginUser)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

  sendEmail(email){
    this.usersService.setUserEmail(email);
    localStorage.setItem('email', email);
    console.log('email:' + email);
  }

}

