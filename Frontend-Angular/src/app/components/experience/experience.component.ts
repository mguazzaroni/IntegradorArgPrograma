import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/Services/experience.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Experience[] | any = [];
  isLogged!: boolean;
  id: number = this.activateRouter.snapshot.params['id'];

  constructor(private experienceService: ExperienceService,
              private tokenService: TokenService,
              private activateRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }

    this.experienceList();
  }

  experienceList(): void{
    this.experienceService.getAllExperience().subscribe( data => {
      this.experience = data;
    })
  }
  onDelete(id: number): void{
    if(id != undefined){
      this.experienceService.delete(id).subscribe( res => {
        this.experienceList();
        this.router.navigate(['']);
      }, error => {
        this.experienceList();
        this.router.navigate(['']);
      });
    }
  }

}
