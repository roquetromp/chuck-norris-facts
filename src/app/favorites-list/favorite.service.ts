import { Injectable } from '@angular/core';
import { ChuckNorrisFact } from '../facts/chuck-norris-fact.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteFacts:ChuckNorrisFact[] = [];

  addFactToFavorites(fact:ChuckNorrisFact){
    this.favoriteFacts.push(fact);
  }

  removeFactFromFavorites(fact){
    let factIndex = this.favoriteFacts.findIndex((favoriteFact)=>{
      return favoriteFact.id === fact.id
    })

    this.favoriteFacts.splice(factIndex, 1);
  }

  getFavoriteFacts():ChuckNorrisFact[]{
    return this.favoriteFacts.slice();
  }
}
