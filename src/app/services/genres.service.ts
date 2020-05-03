import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private popularGenres  = 'http://localhost:3000/api/genres/genrepopular/true';

  private insertGenreUrl = 'http://localhost:3000/api/genres/';

  constructor(private http: HttpClient) { }

  getPopularGenres() {
    return this.http.get<any>(this.popularGenres);
  }

  getGenres() {
    return this.http.get<any>(this.insertGenreUrl);
  }

  // crea un género, le pasamos la url y el genero
  createGenre(genre){
    return this.http.post<any>(this.insertGenreUrl, genre);
  }

  deleteGenre(genre, token){
    const _id = genre._id;
    // const url = `${this.listMovieUrl}${_id}`;
    return this.http.delete<any>(`http://localhost:3000/api/genres/${_id}`, {
      headers: {
        Authorization: token
      }
    });
  }

}
