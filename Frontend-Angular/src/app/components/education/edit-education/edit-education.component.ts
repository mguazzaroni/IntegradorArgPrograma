import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/Services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  educ: Education = null;
  id: number = this.activateRouter.snapshot.params['id'];

  constructor(
    private educService: EducationService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.educService.getEducation(this.id).subscribe(
      (data) => {
        this.educ = data;
      },
      (error) => {}
    );
  }

  onUpdate(): void {
    this.educService.updateEducation(this.id, this.educ).subscribe(
      (res) => {
        this.router.navigate(['']);
      },
      (error) => {
        alert('An error has occurred');
      }
    );
  }
}
