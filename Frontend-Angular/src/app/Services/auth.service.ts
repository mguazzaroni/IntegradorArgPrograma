import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwtdto } from '../models/jwtdto';
import { Login } from '../models/login';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://localhost:8080/auth';
  constructor(private HttpClient: HttpClient) { }

  public newUser(newUser: NewUser): Observable<any>{
    return this.HttpClient.post<any>(this.URL + '/new', newUser);
  }
  public login(login: Login): Observable<Jwtdto> {
    return this.HttpClient.post<Jwtdto>(this.URL + '/login', login);
  }
}
