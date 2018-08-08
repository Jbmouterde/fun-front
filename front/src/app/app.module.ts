import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestService } from './api/test.service';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { HomeComponent } from './home/home.component';
import{ HttpClientModule} from '@angular/common/http';
import { PaysComponent } from './pays/pays.component';
import { PhotoComponent } from './photo/photo.component'


@NgModule({
  declarations: [
    AppComponent,
    ChiffresComponent,
    HomeComponent,
    PaysComponent,
    PhotoComponent
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
