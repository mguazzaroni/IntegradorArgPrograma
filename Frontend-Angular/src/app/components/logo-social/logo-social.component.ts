import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-logo-social',
  templateUrl: './logo-social.component.html',
  styleUrls: ['./logo-social.component.css']
})
export class LogoSocialComponent implements OnInit {

  isLogged!: boolean;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokenService.Logout();
    window.location.reload();
    this.isLogged = false;
  }

  login(): void{
    this.router.navigate(['/login']);
  }

}
