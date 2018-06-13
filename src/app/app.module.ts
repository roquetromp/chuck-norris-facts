import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckNorrisFactsService } from './chuck-norris-facts.service';
import { FactsListComponent } from './facts-list/facts-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FactsListComponent,
    FavoritesListComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    ChuckNorrisFactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
