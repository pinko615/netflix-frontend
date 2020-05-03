import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent implements OnInit {
  moviesGenreDocumentary = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getListMoviesGenreDocumentary();
  }

  getListMoviesGenreDocumentary(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getMoviesGenreDocumentary()
      .subscribe(
        res => {
          this.moviesGenreDocumentary = res;
        },
        err => console.log(err)
      );
  }

}
