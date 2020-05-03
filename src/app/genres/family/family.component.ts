import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  moviesGenreFamily = [];

  ngOnInit(): void {
    this.getListMoviesGenreFamily();
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

}
