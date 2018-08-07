import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path:  'chiffres', component: ChiffresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




