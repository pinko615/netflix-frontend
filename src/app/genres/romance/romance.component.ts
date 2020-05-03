import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.scss']
})
export class RomanceComponent implements OnInit {
  moviesGenreRomance = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMoviesGenreRomance();
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

}
