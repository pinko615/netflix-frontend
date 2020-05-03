import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector   : 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls  : ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  moviesGenreAction      = [];
  moviesGenreComedy      = [];
  moviesGenreDocumentary = [];
  moviesGenreDrama       = [];
  moviesGenreFamily      = [];
  moviesGenreRomance     = [];
  moviesGenreTerror      = [];
  moviesGenreWestern     = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.getListMoviesGenreAction();
    this.getListMoviesGenreComedy();
    this.getListMoviesGenreDocumentary();
    this.getListMoviesGenreDrama();
    this.getListMoviesGenreFamily();
    this.getListMoviesGenreRomance();
    this.getListMoviesGenreTerror();
    this.getListMoviesGenreWestern();
  }

  getListMoviesGenreAction(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreAction()
      .subscribe(
        res => {
          this.moviesGenreAction = res;
        },
        err => console.log(err)
      );
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

  getListMoviesGenreDocumentary(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreDocumentary()
      .subscribe(
        res => {
          this.moviesGenreDocumentary = res;
        },
        err => console.log(err)
      );
  }

  getListMoviesGenreDrama(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreDrama()
      .subscribe(
        res => {
          this.moviesGenreDrama = res;
        },
        err => console.log(err)
      );
  }

  getListMoviesGenreFamily(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreFamily()
      .subscribe(
        res => {
          this.moviesGenreFamily = res;
        },
        err => console.log(err)
      );
  }

  getListMoviesGenreRomance(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreRomance()
      .subscribe(
        res => {
          this.moviesGenreRomance = res;
        },
        err => console.log(err)
      );
  }

  getListMoviesGenreTerror(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreTerror()
      .subscribe(
        res => {
          this.moviesGenreTerror = res;
        },
        err => console.log(err)
      );
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
