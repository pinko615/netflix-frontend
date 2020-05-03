import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  emailStorage;

  private listUserUrl = 'http://localhost:3000/api/users/';


  constructor(private http: HttpClient) { }

  // getUsers(user) {
  //   // tslint:disable-next-line:variable-name
  //   const _id = user.id;
  //   const url = `${this.listUserUrl}${_id}`;
  //   return this.http.get<any>(url);
  // }

  // obtiene los usuarios del servidor
  getListUsers(){
    return this.http.get<any>(this.listUserUrl);
  }

  // borrar usuario
  deleteUser(user){
    const _id = user._id;
    const url = `${this.listUserUrl}${_id}`;
    return this.http.delete<any>(url);
  }

  setUserEmail(email){
    this.emailStorage = email;
  }

  getUserEmail(){
    return this.http.get(`http://localhost:3000/api/users/email/${this.emailStorage}`);
  }

}
