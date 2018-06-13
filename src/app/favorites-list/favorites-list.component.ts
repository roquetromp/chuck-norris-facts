import { Component, OnInit } from '@angular/core';
import { ChuckNorrisFact } from '../chuck-norris-fact.model';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  favorites:ChuckNorrisFact[];
  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.updateFavoritesList();
  }

  unfavorite(fact:ChuckNorrisFact){
    this.userListService.removeFactFromFavorites(fact);
    this.updateFavoritesList();
  }

  updateFavoritesList():void {
    this.favorites = this.userListService.getFavoriteFacts();
  }

}
