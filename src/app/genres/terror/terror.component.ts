import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {
  moviesGenreTerror = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMoviesGenreTerror();
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

}
