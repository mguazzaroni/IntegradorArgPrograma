import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private URL = "http://localhost:8080/education"; //Url del servidor local, cambiar cuando haga el deploy del backend

  //Hago uso de HTTPClient para peticiones http
  constructor(private http: HttpClient) { }

  //Metodo para traer la educacion, es un observable
  public getEducation(): Observable<Education> {
    return this.http.get<Education>(this.URL + '/all');
  }
}
