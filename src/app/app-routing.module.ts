import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactsListComponent } from './facts-list/facts-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

const routes: Routes = [
  { path: 'facts', component: FactsListComponent },
  { path: 'favorites', component: FavoritesListComponent },
  { path: '', redirectTo: '/facts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
