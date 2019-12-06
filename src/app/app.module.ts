
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './shared/authentication.service';
import { AuthService } from './shared/auth.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../../src/app/pages/home/home.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleComponent } from './pages/people/people.component';
import { FilmsComponent } from './pages/films/films.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PeopleDetailComponent } from './pages/people/people-detail/people-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guards';
import { SpinComponent } from './spin/spin.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    CardDetailComponent,
    FooterComponent,
    PeopleComponent,
    FilmsComponent,
    PaginationComponent,
    PeopleDetailComponent,
    LoginComponent,
    SpinComponent,
    RegisterComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
  ],
  providers: [AuthService,
              AuthGuard,
              AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
