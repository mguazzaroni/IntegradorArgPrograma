import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL= "http://localhost:8080";
  constructor(private http: HttpClient) {
  }
  public getUser():Observable<User> {
    return this.http.get<User>(this.URL + '/users/all');
  }
}