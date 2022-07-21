import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/Services/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css'],
})
export class NewEducationComponent implements OnInit {
  institution: string = '';
  title: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private eduService: EducationService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    let education = new Education(
      this.title,
      this.institution,
      this.startDate,
      this.endDate
    );
    this.eduService.newEducation(education).subscribe(
      (res) => {
        this.router.navigate(['']);
      },
      (error) => {
        this.router.navigate(['']);
      }
    );
  }
}
