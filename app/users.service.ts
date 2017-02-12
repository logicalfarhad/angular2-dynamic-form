import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { User } from "./user"

@Injectable()
export class UsersService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id: number) {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user: User) {
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user: User) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id: number) {
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id: number) {
    return this.url + "/" + id;
  }
}
