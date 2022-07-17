import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  person: Person[] | any = [];

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.personService.getPerson()
    .subscribe(data => {
      this.person = data;
    })
  }

}
