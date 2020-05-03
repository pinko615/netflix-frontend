import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  createMovie = {
    genreId: null,
    actorId: null,
    title: null,
    year: null,
    length: null,
    poster: null,
    background: null,
    rating: null,
    trailerUrl: null,
    description: null,
    price: null,
    mainPremiere: null,
    mainHome: null,
    mainPopular: null,
    popular: null,
    premiere: null,
    numOrders: null
  };


  createActor = {
    firstName: null,
    lastName: null,
    country: null,
    city: null
  };

  createGenre = {
    name: null,
    imageUrl: null,
    popular: null
  };

  constructor(private movieService: MovieService,
              private genreService: GenresService) { }

  ngOnInit(): void {
  }

  // crea la pelicula, le pasamos el objeto createMovie donde tenemos todos los datos de la pelicula
  createMovies(){
    this.movieService.createMovie(this.createMovie)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
  }


  // crea el actor, le pasamos el objeto createActor donde tenemos todos los datos del actor
  createActors(){
    this.movieService.createActor(this.createActor)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
  }


  // crea un género, le pasamos el objeto createGenre donde tenemos todos los datos del género
  createGenres(){
    this.genreService.createGenre(this.createGenre)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
  }

}
