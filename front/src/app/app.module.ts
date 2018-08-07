import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestService } from './api/test.service';
import { ChiffresComponent } from './chiffres/chiffres.component';
import { HomeComponent } from './home/home.component';
import{ HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ChiffresComponent,
    HomeComponent
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
