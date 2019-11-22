
import { FilmsComponent } from './pages/films/films.component';
import { PeopleComponent } from './pages/people/people.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
     { path: '', pathMatch: 'full', redirectTo: 'home' },
     { path: 'home', component: HomeComponent },
     { path: 'people', component: PeopleComponent },
     { path: 'people/:id', component: PeopleComponent },
     { path: 'films', component: FilmsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
