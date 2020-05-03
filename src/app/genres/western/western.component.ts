import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-western',
  templateUrl: './western.component.html',
  styleUrls: ['./western.component.scss']
})
export class WesternComponent implements OnInit {
  moviesGenreWestern = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMoviesGenreWestern();
  }

  getListMoviesGenreWestern(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreWestern()
      .subscribe(
        res => {
          this.moviesGenreWestern = res;
        },
        err => console.log(err)
      );
  }

}
