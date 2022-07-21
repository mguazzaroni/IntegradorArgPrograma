import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  baseURL = environment.baseURL; //Url del servidor local, cambiar cuando haga el deploy del backend

  //Hago uso de HTTPClient para peticiones http
  constructor(private http: HttpClient) {}

  //Metodo para traer la educacion, es un observable, maneja las peticiones y respuestas asincronas
  public getEducationList(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.baseURL}/education/all`);
  }
  public getEducation(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.baseURL}/education/get/${id}`);
  }
  public newEducation(educacion: Education): Observable<Education> {
    return this.http.post<any>(`${this.baseURL}/education/new`, educacion);
  }
  public updateEducation(id: number, education: Education): Observable<Education[]> {
    return this.http.put<any>(`${this.baseURL}/education/update/${id}`, education);
  }
}
