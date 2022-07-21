import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/Services/education.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] | any = [];
  isLogged!: boolean;

  constructor(public eduService: EducationService, public tokenService: TokenService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }

    this.listEducation();

  }

  listEducation(): void {
    this.eduService.getEducationList().subscribe( data => {
        this.education = data;
    })
  }
}
