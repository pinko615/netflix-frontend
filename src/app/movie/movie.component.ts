import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDescription } from 'src/app/interfaces/movie-description';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  // movie: MovieDescription;

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


  constructor(private route: ActivatedRoute,
              public movieService: MovieService) { }

  ngOnInit(): void {

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

