import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  genres = [];
  searchGenre;

  constructor(private genresService: GenresService,
              private router: Router) { }

  ngOnInit() {
    this.getListGenres();
  }

  getListGenres(){
    // cuando se inicializa el componente lanzamos la petición
    this.genresService.getGenres()
      .subscribe(
        res => {
          this.genres = res;
        },
        err => console.log(err)
      );
  }

  delete(deleteGenre){
    const token = localStorage.getItem('token');
    this.genresService.deleteGenre(deleteGenre, token)
      .subscribe(
        res => {
          // guarda el indice de la pelicula
          setTimeout(() => this.router.navigate(['/admin']), 1000);
          console.log(res);
        },
        err => {
          this.getListGenres();
          console.log(err);
        }
      );
  }

}
