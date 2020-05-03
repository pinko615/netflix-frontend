import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  moviesGenreAction = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.getListMoviesGenreAction();
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


}
