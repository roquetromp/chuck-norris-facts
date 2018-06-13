import { Injectable } from '@angular/core';
import { ChuckNorrisFact } from './chuck-norris-fact.model';
import { faThumbsDown } from '../assets/fontawesome-free-5.0.13/advanced-options/use-with-node-js/fontawesome-free-regular';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private favoriteFacts:ChuckNorrisFact[] = [];
  constructor() { }

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
