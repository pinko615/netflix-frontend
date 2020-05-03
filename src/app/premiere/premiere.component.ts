import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { GenresService } from 'src/app/services/genres.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-premiere',
  templateUrl: './premiere.component.html',
  styleUrls: ['./premiere.component.scss']
})
export class PremiereComponent implements OnInit {
  moviespremiere = [];
  premieresmain = [];
  searchPremiere;

  constructor(private movieService: MovieService,
              private genresService: GenresService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.listPremiereMovies();
    this.getMainPremiere();
  }

  listPremiereMovies() {
    this.movieService.getPremiereMovies()
    .subscribe (
      res => {
        this.moviespremiere = res;
      },
      err => console.log(err)
      );
    }

    getMainPremiere() {
      this.movieService.getMainPremiere()
      .subscribe (
        res => {
          this.premieresmain = res;
        },
        err => console.log(err)
        );
      }

      getImgContents(background): SafeUrl {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${background})`);
      }

}
