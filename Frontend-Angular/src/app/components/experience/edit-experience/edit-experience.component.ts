import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  exp: Experience = null;

  id: number = this.activateRouter.snapshot.params['id'];

  constructor(
    private expService: ExperienceService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.expService.getExperience(this.id).subscribe(
      (data) => {
        this.exp = new Experience(
          data.companyName,
          data.description,
          data.startDate,
          data.endDate,
          data.id
        );
      },
      (error) => {}
    );
  }

  onUpdate(): void {
    this.expService.updateExperience(this.id, this.exp).subscribe(
      (res) => {
        this.router.navigate(['']);
      },
      (error) => {
        this.router.navigate(['']);
      }
    );
  }
  onDelete(id: Number): void {
    
  }
}
