import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = "http://localhost:8080"; //Url del servidor local, cambiar cuando haga el deploy del backend

  //Hago uso de HTTPClient para peticiones http
  constructor(private http: HttpClient) {}

  //Metodo para traer las personas, en este caso 1, es un observable
  public getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.URL + '/persons/get/profile');
  }
}
