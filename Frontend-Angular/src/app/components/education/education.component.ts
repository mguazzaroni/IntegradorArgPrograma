import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/Education';
import { EducationService } from 'src/app/Services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = []; /*Education = new Education("", "", "", "");*/

  constructor(public eduService: EducationService) { }

  ngOnInit(): void {
    this.eduService.getEducation().subscribe(data => {
      this.education.push(data) ;

      console.log(this.education);
      //Lo que este en data, guardalo en persona, osea cuando le pegues a la api, guardame en el objeto persona lo que traigas de la db
    })
  }

}
