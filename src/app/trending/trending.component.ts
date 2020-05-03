import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { GenresService } from 'src/app/services/genres.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  moviestrending = [];
  mainmoviestrending = [];
  popularsmain = [];
  searchTrending;

  constructor(private movieService: MovieService,
              private genresService: GenresService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.listPopularMovies();
    this.listMainPopularMovies();
    this.getMainPopular();
  }


  getMainPopular() {
    this.movieService.getMainPopular()
    .subscribe (
      res => {
        this.popularsmain = res;
      },
      err => console.log(err)
      );
    }

    listPopularMovies() {
      this.movieService.getPopularMovies()
      .subscribe (
        res => {
          this.moviestrending = res;
        },
        err => console.log(err)
        );
      }

      listMainPopularMovies() {
        this.movieService.getMainPopularMovies()
        .subscribe (
          res => {
            this.mainmoviestrending = res;
            console.log(this.mainmoviestrending);
          },
          err => console.log(err)
          );
        }
                          getImgContents(background): SafeUrl {
                            return this.sanitizer.bypassSecurityTrustStyle(`url(${background})`);
                          }

}
