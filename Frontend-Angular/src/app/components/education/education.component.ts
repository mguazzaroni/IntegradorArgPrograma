import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/Services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] | any = [];

  constructor(public eduService: EducationService) { }

  ngOnInit(): void {
    this.listEducation();

  }

  listEducation(): void {
    this.eduService.getEducationList().subscribe( data => {
        this.education = data;
    })
  }
}
