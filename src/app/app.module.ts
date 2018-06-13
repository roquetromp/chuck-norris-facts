import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckNorrisFactsService } from './facts/chuck-norris-facts.service';
import { FactsListComponent } from './facts-list/facts-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FactsListComponent,
    FavoritesListComponent,
    NavigationMenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    ChuckNorrisFactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
