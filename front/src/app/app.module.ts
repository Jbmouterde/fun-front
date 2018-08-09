import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestService } from './api/test.service';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { HomeComponent } from './home/home.component';
import{ HttpClientModule} from '@angular/common/http';
import { PaysComponent } from './pays/pays.component';
import { PhotoComponent } from './photo/photo.component';
import { MovieComponent } from './movie/movie.component';
import { NotComponent } from './not/not.component';
import { BookComponent } from './book/book.component';
import { QuotesComponent } from './quotes/quotes.component'


@NgModule({
  declarations: [
    AppComponent,
    ChiffresComponent,
    HomeComponent,
    PaysComponent,
    PhotoComponent,
    MovieComponent,
    NotComponent,
    BookComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
