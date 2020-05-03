import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users: any = [];
  emailStorage;

  /*user: any = {
    firstName: String,
     lastName: String,
        email: String,
     password: String,
         role: String,
      address: String,
      country: String,
     province: String,
          zip: Number
};*/



  constructor(public authService: AuthService,
              public movieService: MovieService,
              public usersService: UsersService,
              public router: Router) { }

  ngOnInit() {
    // this.getListUsers();
    this.recogeEmailStorage();
    this.getEmail();
    this.getEmailUser();
  }

  recogeEmailStorage(){
    this.emailStorage = localStorage.getItem('email');
  }

  getEmail(){
    this.usersService.setUserEmail(this.emailStorage);
  }

  getEmailUser(){
    // cuando se inicializa el componente lanzamos la petición
    this.usersService.getUserEmail()
      .subscribe(
        res => {
          this.users = res;
          console.log('holaaa');
          console.log(this.users);
        },
        err => console.log(err)
      );
  }


  /*getListUsers(){
    // cuando se inicializa el componente lanzamos la petición
    this.usersService.getListUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        err => console.log(err)
      );
  }*/


}
