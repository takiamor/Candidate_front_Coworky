import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { QuizComponent } from './quiz/quiz.component';
import { DesignerComponent } from './designer/designer.component';
import { CloudComponent } from './cloud/cloud.component';
import { SecurityComponent } from './security/security.component';
import { CampanyComponent } from './campany/campany.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilcampanyComponent } from './profilcampany/profilcampany.component';
import { TestComponent } from './test/test.component';
import { LogincampanyComponent } from './logincampany/logincampany.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssesmentsComponent } from './assesments/assesments.component';
import { Quiz2Component } from './quiz2/quiz2.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'fullstack', component: FullstackComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'designer', component: DesignerComponent},
  { path: 'cloud', component: CloudComponent},
  {path:'security',component :SecurityComponent},
  {path :'campany',component :CampanyComponent},
  {path: 'profil',component :ProfilComponent},
  {path: 'profilcampany',component:ProfilcampanyComponent},
  {path: 'test',component:TestComponent},
  {path: 'logincampany',component:LogincampanyComponent},
  {path: 'fullstack',component:FullstackComponent},
  {path: 'assesments',component:AssesmentsComponent},
  {path: 'quiz2',component:Quiz2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
