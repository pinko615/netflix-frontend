import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  users = [];
  constructor(public authService: AuthService,
              public movieService: MovieService,
              public usersService: UsersService) { }

  ngOnInit(): void {
  }

}
