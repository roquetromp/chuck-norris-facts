import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckNorrisFactsService } from './chuck-norris-facts.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    ChuckNorrisFactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
