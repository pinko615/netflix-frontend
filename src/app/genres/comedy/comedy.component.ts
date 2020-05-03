import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit {

  moviesGenreComedy = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMoviesGenreComedy();
  }

  getListMoviesGenreComedy(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreComedy()
      .subscribe(
        res => {
          this.moviesGenreComedy = res;
        },
        err => console.log(err)
      );
  }

}
