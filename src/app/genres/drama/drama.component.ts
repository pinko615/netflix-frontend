import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class DramaComponent implements OnInit {
  moviesGenreDrama = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMoviesGenreDrama();
  }

  getListMoviesGenreDrama(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreDrama()
      .subscribe(
        res => {
          this.moviesGenreDrama = res;
        },
        err => console.log(err)
      );
  }

}
