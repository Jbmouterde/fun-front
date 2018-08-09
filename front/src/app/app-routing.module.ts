import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { PhotoComponent } from './photo/photo.component';
import { NotComponent } from './not/not.component';
import { MovieComponent } from './movie/movie.component';
import { BookComponent } from './book/book.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path : 'numbers', component : HomeComponent},
  { path:  '', component: ChiffresComponent},
  { path : 'country', component : PaysComponent},
  { path : 'pictures', component : PhotoComponent},
  { path : 'movies', component : MovieComponent},
  { path : 'books', component : BookComponent},
  { path : 'quotes', component : QuotesComponent},

  { path : '**', component :NotComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




