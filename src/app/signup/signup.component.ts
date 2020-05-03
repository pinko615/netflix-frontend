import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpUser = {
    firstName: null,
    email: null,
    password: null
  };

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.auth.signUpUser(this.signUpUser)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      );
  }

}
