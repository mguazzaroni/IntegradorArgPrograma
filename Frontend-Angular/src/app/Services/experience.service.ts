import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  baseURL = environment.baseURL;

  constructor(private httpClient: HttpClient) {}

  public getAllExperience(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(`${this.baseURL}experience/all`);
  }
  public getExperience(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(
      `${this.baseURL}experience/get/${id}`
    );
  }
  public newExperience(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(
      `${this.baseURL}experience/new`,
      experience
    );
  }
  public updateExperience(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(
      `${this.baseURL}experience/update/${id}`,
      experience
    );
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.baseURL}experience/delete/${id}`
    );
  }
}
