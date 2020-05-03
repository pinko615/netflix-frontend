import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = [];
  searchText;

  constructor(private usersService: UsersService,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMovies()
      .subscribe(
        res => {
          this.movies = res;
        },
        err => console.log(err)
      );
  }

  delete(deleteMovie){
    const token = localStorage.getItem('token');
    this.movieService.deleteMovie(deleteMovie, token)
      .subscribe(
        res => {
          // guarda el indice de la pelicula
          setTimeout(() => this.router.navigate(['/admin']), 1000);
          console.log(res);
        },
        err => {
          this.getMovies();
          console.log(err);
        }
      );
  }

}
