import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  actors = [];
  searchActor;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.getListActors();
  }

  getListActors(){
    // cuando se inicializa el componente lanzamos la petición
    this.movieService.getListActors()
      .subscribe(
        res => {
          this.actors = res;
        },
        err => console.log(err)
      );
  }

  delete(deleteActor){
    const token = localStorage.getItem('token');
    this.movieService.deleteActor(deleteActor, token)
      .subscribe(
        res => {
          // guarda el indice de la pelicula
          setTimeout(() => this.router.navigate(['/admin']), 1000);
          console.log(res);
        },
        err => {
          this.getListActors();
          console.log(err);
        }
      );
  }

}
