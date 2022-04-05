import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: any;

  constructor(private gitHubServices: GithubService) { }

  ngOnInit(): void {
    this.gitHubServices.loadRepos().subscribe(res => {
      this.repos = res;
      console.log(res);
      
    })
  }

}
