import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Jwtdto } from '../models/jwtdto';
import { Login } from '../models/login';
import { NewUser } from '../models/new-user';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private HttpClient: HttpClient) { }

  public newUser(newUser: NewUser): Observable<any>{
    return this.HttpClient.post<any>(baseURL + 'auth/new', newUser);
  }
  public login(login: Login): Observable<Jwtdto> {
    return this.HttpClient.post<Jwtdto>(baseURL + 'auth/login', login);
  }
}
