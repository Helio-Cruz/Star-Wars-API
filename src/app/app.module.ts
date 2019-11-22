
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleComponent } from './pages/people/people.component';
import { FilmsComponent } from './pages/films/films.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PeopleDetailComponent } from './pages/people/people-detail/people-detail.component';
 



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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
