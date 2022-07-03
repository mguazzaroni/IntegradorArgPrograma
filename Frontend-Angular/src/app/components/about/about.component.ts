import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  person: Person = new Person("", "", "");

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {
      this.person = data;
      console.log("Persona");
      console.log(data); //Lo que este en data, guardalo en persona, osea cuando le pegues a la api, guardame en el objeto persona lo que traigas de la db
    })
  }

}
