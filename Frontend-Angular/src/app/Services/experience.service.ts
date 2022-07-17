import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {
  private URL = "http://localhost:8080/experience";
  constructor(private httpClient: HttpClient) { }

  public getAllExperience(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL + "/all");
  }
}
