import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  user;
  searchUser;

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
    // cuando se inicializa el componente lanzamos la petición
    this.usersService.getListUsers()
      .subscribe(
        res => {
          this.users = res;
        },
        err => console.log(err)
      );
  }

  delete(deleteUser){
    this.usersService.deleteUser(deleteUser)
      .subscribe(
        res => {
          // guarda el indice del usuario
          const index = this.users.indexOf(deleteUser);
          // si el indice es mayor a -1 es que hay usuario
          if (index > -1){
            // borra el usuario
            this.users.splice(index, 1);
            this.router.navigate(['/admin']);
          }
        },
        err => console.log(err)
      );
  }
}
