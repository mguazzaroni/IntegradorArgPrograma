import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoSocialComponent } from './components/logo-social/logo-social.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { importType } from '@angular/compiler/src/output/output_ast';
//Importo Circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardsoftskillsComponent } from './components/hardsoftskills/hardsoftskills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    LogoSocialComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HardsoftskillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
