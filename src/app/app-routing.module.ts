import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { FilmsComponent } from './pages/films/films.component';
import { PeopleComponent } from './pages/people/people.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';




import { AuthGuard } from './shared/guards/auth.guards';



const routes: Routes = [
     { path: '', pathMatch: 'full', redirectTo: 'login'},
     { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'people', component: PeopleComponent, canActivate: [AuthGuard] },
     { path: 'people/:id', component: PeopleComponent },
     { path: 'films', component: FilmsComponent, 
     // canActivate: [AuthGuard]
    },
      { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
  //  { path: 'pages', loadChildren: 'pages/pages.module#PagesModule'},
     { path: 'four-oh-four', component: FourOhFourComponent },
     { path: '**', redirectTo: '/four-oh-four' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
