import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.scss']
})
export class RentMovieComponent implements OnInit {

  movie: any = {
    genre: Object,
    actor: Object,
    title: String,
 premiere: Boolean,
  popular: Boolean,
description: String,
   length: String,
    price: Number,
     year: Number,
   rating: Number,
mainPopular: Boolean,
mainPremiere: Boolean,
 mainHome: Boolean,
numOrders: Number,
trailerUrl: String,
   poster: String,
background: String
};

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
    // this.getUser();
  }

  getMovie(){
    this.route.params
      .subscribe(parametros => {
        console.log(parametros.id);
        this.movieService.getMovieId(parametros.id)
        .subscribe(
          res => {
            this.movie = res;
            console.log(this.movie);
          },
          err => console.log(err)
        );
      });
  }

}
