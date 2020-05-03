import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies = [];
  searchMovies;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe (
      res => {
        this.movies = res;
      },
      err => console.log(err)
    );
  }

}
