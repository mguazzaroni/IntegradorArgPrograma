import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';
@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css'],
})
export class NewExperienceComponent implements OnInit {
  companyName: string = '';
  activity: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private expService: ExperienceService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    let exp = new Experience(
      this.companyName,
      this.activity,
      this.startDate,
      this.endDate
    );

    this.expService.newExperience(exp).subscribe(
      (res) => {
        this.router.navigate(['']);
      },
      (error) => {
        this.router.navigate(['']);
      }
    );
  }
}
