import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] | any = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceList();
  }

  experienceList(): void{
    this.experienceService.getAllExperience().subscribe(data => {
      this.experience = data;
    })
  }

}
