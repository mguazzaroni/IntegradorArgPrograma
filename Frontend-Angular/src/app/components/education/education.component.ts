import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/Services/education.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Education[] | any = [];
  isLogged!: boolean;
  id: number = this.activateRouter.snapshot.params['id'];
  constructor(
    public eduService: EducationService,
    public tokenService: TokenService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.listEducation();
  }

  listEducation(): void {
    this.eduService.getEducationList().subscribe((data) => {
      this.education = data;
    });
  }

  onDelete(id: number): void {
    if (this.id != undefined) {
      this.eduService.delete(id).subscribe(
        (res) => {
          this.listEducation();
          this.router.navigate(['']);
        },
        (error) => {
          this.listEducation();
          this.router.navigate(['']);
        }
      );
    }
  }
}
