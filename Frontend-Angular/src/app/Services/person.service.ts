import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseURL = environment.baseURL; //Url del servidor local, cambiar cuando haga el deploy del backend

  //Hago uso de HTTPClient para peticiones http
  constructor(private httpClient: HttpClient) {}

  //Metodo para traer las personas, en este caso 1, es un observable
  //Viene hardcodeado desde el backend para devolver siempre el mismo perfil
  //TODO: Hacer que cada usuario que se loguee tenga un perfil con foto
  public getPerson(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.baseURL}/person/get/profile`);
  }
  public newEducation(education: Education): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/person/new`, education);
  }
  public updateExperience(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(`${this.baseURL}/person/edit/${id}`, education);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseURL}/person/delete/${id}`);
  }
}
