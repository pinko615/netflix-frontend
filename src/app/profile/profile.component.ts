import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users = {
    email: null
  };
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // this.userList();
  }

  // userList() {
  //   this.usersService.getUsers(this.users)
  //   .subscribe(
  //     res => {
  //       this.users = res;
  //     },
  //     err => console.log(err)
  //   );
  // }


}
