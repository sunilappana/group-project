import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { QuestiondashboardComponent } from './questiondashboard/questiondashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterComponent } from './register/register.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UsercrudComponent } from './usercrud/usercrud.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'Register', component: RegisterComponent},
  {path:'UserDashBoard',component:UserdashboardComponent},
  {path:'AdminDashBoard',component:AdmindashboardComponent},
  {path:'AskQuestion',component:AskquestionComponent},
  {path:'QuestionDashBoard',component:QuestiondashboardComponent},
  {path:'Chat',component:ChatComponent},
  {path:'NewQuestions',component:NewquestionComponent},
  {path:'Questions',component:QuestionsComponent},
  {path:'UserUpdate',component:UsercrudComponent},
  {path:'DeleteUser',component:AdmincrudComponent},
  {path:'UpdateAdmin',component:UpdateadminComponent},
  {path:'login',component:LoginComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
