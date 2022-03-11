import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { QuizComponent } from './quiz/quiz.component';
import { DesignerComponent } from './designer/designer.component';
import { CloudComponent } from './cloud/cloud.component';
import { SecurityComponent } from './security/security.component';
import { HeaderComponent } from './header/header.component';
import { CampanyComponent } from './campany/campany.component';
import { TestComponent } from './test/test.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ProfilComponent } from './profil/profil.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { ProfilcampanyComponent } from './profilcampany/profilcampany.component';
import { NavbarcampanyComponent } from './navbarcampany/navbarcampany.component';
import { NavbarcandidateComponent } from './navbarcandidate/navbarcandidate.component';
import { LogincampanyComponent } from './logincampany/logincampany.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { Quiz2Component } from './quiz2/quiz2.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RegistrationComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    FullstackComponent,
    QuizComponent,
    DesignerComponent,
    CloudComponent,
    SecurityComponent,
    HeaderComponent,
    CampanyComponent,
    TestComponent,
    AssessmentComponent,
    ProfilComponent,
    CandidatesComponent,
    ProfilcampanyComponent,
    NavbarcampanyComponent,
    NavbarcandidateComponent,
    LogincampanyComponent,
    AssesmentsComponent,
    Quiz2Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
