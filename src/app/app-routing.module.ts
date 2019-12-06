import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { FilmsComponent } from './pages/films/films.component';
import { PeopleComponent } from './pages/people/people.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



import { AuthGuard } from './shared/guards/auth.guards';



const routes: Routes = [
     { path: '', pathMatch: 'full', redirectTo: 'home'},
     { path: 'home', component: HomeComponent,
     canActivate: [AuthGuard],

     },
     { path: 'people', component: PeopleComponent,
     canActivate: [AuthGuard],

     },
     { path: 'people/:id', component: PeopleComponent },
     { path: 'films', component: FilmsComponent,
      canActivate: [AuthGuard],
     },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
