import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactsListComponent } from './facts-list/facts-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { LoginComponent } from './login/login.component';
import { FavoritesListActivator } from './favorites-list/favorites-list.activator';

const routes: Routes = [
  { path: 'facts', component: FactsListComponent },
  { path: 'favorites', component: FavoritesListComponent, canActivate: [FavoritesListActivator] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/facts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
