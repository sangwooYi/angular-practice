import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl: string = '/api/users'
  http: HttpClient

  constructor(http: HttpClient) { 
    this.http = http;
  }

  getUser(id: number) {
    this.http.get(`${this.baseUrl}/${id}`).pipe(
      map( res => res )
    ).subscribe()
  }

  addUser(user: User) {

  }

  modifyUser(user: User) {

  }
  removeUser(user: User) {

  }
}
