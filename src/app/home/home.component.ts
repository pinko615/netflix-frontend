import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { GenresService } from 'src/app/services/genres.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviestrending = [];
  moviespremiere = [];
  genreimages = [];
  homemains = [];
  premieremains = [];

  constructor(private movieService: MovieService,
              private genresService: GenresService,
              private sanitizer: DomSanitizer,
              public router: Router) { }

  ngOnInit() {
    this.getGenreImage();
    this.getPremiereMovies();
    this.getPopularMovies();
    this.getMainHome();
    this.getMainPremiere();
    this.refresh();
  }

  getImgContent(background): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${background})`);
  }

  getPopularMovies() {
    this.movieService.getPopularMovies()
    .subscribe (
      res => {
        this.moviestrending = res;
      },
      err => console.log(err)
    );
  }

  getGenreImage() {
    this.genresService.getPopularGenres()
    .subscribe (
      res => {
        this.genreimages = res;
        console.log(this.genreimages);
      },
      err => console.log(err)
    );
  }

  getPremiereMovies() {
    this.movieService.getPremiereMovies()
    .subscribe (
      res => {
        this.moviespremiere = res;
      },
      err => console.log(err)
    );
  }

  getMainHome() {
    this.movieService.getMainHome()
    .subscribe (
      res => {
        this.homemains = res;
      },
      err => console.log(err)
    );
  }

  getMainPremiere() {
    this.movieService.getMainPremiere()
    .subscribe (
      res => {
        this.premieremains = res;
      },
      err => console.log(err)
    );
  }

  refresh(){
    this.router.navigate(['/']);
  }



}
