import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private listMoviesGenreAction      = 'http://localhost:3000/api/movies/genremovieaction/action';
  private listMoviesGenreComedy      = 'http://localhost:3000/api/movies/genremoviecomedy/comedy';
  private listMoviesGenreDocumentary = 'http://localhost:3000/api/movies/genremoviedocumentary/documentary';
  private listMoviesGenreDrama       = 'http://localhost:3000/api/movies/genremoviedrama/drama';
  private listMoviesGenreFamily      = 'http://localhost:3000/api/movies/genremoviefamily/family';
  private listMoviesGenreRomance     = 'http://localhost:3000/api/movies/genremovieromance/romance';
  private listMoviesGenreTerror      = 'http://localhost:3000/api/movies/genremovieterror/terror';
  private listMoviesGenreWestern     = 'http://localhost:3000/api/movies/genremoviewestern/western';
  private insertActorsUrl            = 'http://localhost:3000/api/actors/';
  private listMovieUrl               = 'http://localhost:3000/api/movies/';
  private insertMovieUrl             = 'http://localhost:3000/api/movies';
  private listMainPopularUrl         = 'http://localhost:3000/api/movies/mainPopular/true';
  private listMainPopular            = 'http://localhost:3000/api/movies/mainPopular/true';
  private listMainHomeUrl            = 'http://localhost:3000/api/movies/mainHome/true';
  private listMainPremiereUrl        = 'http://localhost:3000/api/movies/mainPremiere/true';
  private listPopularMovieUrl        = 'http://localhost:3000/api/movies/popular/true';
  private listPremiereMovieUrl       = 'http://localhost:3000/api/movies/premiere/true';
 // private infoMoviesTitle = 'http://localhost:3000/api/movies/title/';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<any>(this.listMovieUrl);
  }

  getListActors() {
    return this.http.get<any>(this.insertActorsUrl);
  }

  getPopularMovies() {
    return this.http.get<any>(this.listPopularMovieUrl);
  }

  getPremiereMovies() {
    return this.http.get<any>(this.listPremiereMovieUrl);
  }

  getMainPopularMovies() {
    return this.http.get<any>(this.listMainPopularUrl);
  }

  getMainPopular() {
    return this.http.get<any>(this.listMainPopular);
  }

  getMainHome() {
    return this.http.get<any>(this.listMainHomeUrl);
  }

  getMainPremiere() {
    return this.http.get<any>(this.listMainPremiereUrl);
  }

  getMoviesGenreAction() {
    return this.http.get<any>(this.listMoviesGenreAction);
  }

  getMoviesGenreComedy() {
    return this.http.get<any>(this.listMoviesGenreComedy);
  }

  getMoviesGenreDocumentary() {
    return this.http.get<any>(this.listMoviesGenreDocumentary);
  }

  getMoviesGenreDrama() {
    return this.http.get<any>(this.listMoviesGenreDrama);
  }

  getMoviesGenreFamily() {
    return this.http.get<any>(this.listMoviesGenreFamily);
  }
  getMoviesGenreRomance() {
    return this.http.get<any>(this.listMoviesGenreRomance);
  }

  getMoviesGenreTerror() {
    return this.http.get<any>(this.listMoviesGenreTerror);
  }

  getMoviesGenreWestern() {
    return this.http.get<any>(this.listMoviesGenreWestern);
  }

  getMovieId(id: any){
    return this.http.get(`${this.listMovieUrl}${id}`);
  }

  /*getMoviId( id: any) {
    return this.http.get(`${this.listMovieUrl}${id}`);
  }*/

  // crea una pelicula, le pasamos la url y la pelicula
  createMovie(movie){
    return this.http.post<any>(this.insertMovieUrl, movie);
  }

  // crea un actor, le pasamos la url y el actor
  createActor(actor){
    return this.http.post<any>(this.insertActorsUrl, actor);
  }

  // borrar pelicula
  deleteMovie(movie, token){
    const _id = movie._id;
    // const url = `${this.listMovieUrl}${_id}`;
    return this.http.delete<any>(`http://localhost:3000/api/movies/${_id}`, {
      headers: {
        Authorization: token
      }
    });
  }

  deleteActor(actor, token){
    const _id = actor._id;
    // const url = `${this.listMovieUrl}${_id}`;
    return this.http.delete<any>(`http://localhost:3000/api/actors/${_id}`, {
      headers: {
        Authorization: token
      }
    });
  }

  /*listInfoMoviesTitle(movieSearch: string) {
    // return this.http.get(`${this.infoMoviesTitle}${movieSearch}`);
    return this.http.get(`http://localhost:3000/api/movies/title/${movieSearch}`);
  }*/

}
