import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SpinComponent } from './spin/spin.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FilmsComponent } from './pages/films/films.component';
import { PeopleComponent } from './pages/people/people.component';
import { HomeComponent } from './pages/home/home.component';
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationService } from './shared/services/authentication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AuthGuard } from './shared/guards/auth.guards';
import { HeaderComponent } from './header/header.component';

import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { ErrorInterceptor } from './shared/interceptors/error-interceptor';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    PeopleComponent,
    FilmsComponent,
    ProfileComponent,
    FourOhFourComponent,
    SpinComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    //   CommonModule,
     RouterModule,
     FormsModule,
     MatDialogModule,
     FontAwesomeModule,
     PaginationModule.forRoot(),
 
  ],

  providers: [
    AuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },  /* interceptor fichier */
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, /* interceptor fichier */
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
