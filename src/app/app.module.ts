
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationService } from './shared/services/authentication.service';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleComponent } from './pages/people/people.component';
import { FilmsComponent } from './pages/films/films.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guards';
import { SpinComponent } from './spin/spin.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PeopleComponent,
    FilmsComponent,
    LoginComponent,
    SpinComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    FourOhFourComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
  ],
 
  providers: [
              AuthGuard,
              AuthenticationService,
              {provide: HTTP_INTERCEPTORS, useClass: AuthGuard, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
