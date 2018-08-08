import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path : 'numbers', component : HomeComponent},
  { path:  '', component: ChiffresComponent},
  { path : 'country', component : PaysComponent},
  { path : 'pictures', component : PhotoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




