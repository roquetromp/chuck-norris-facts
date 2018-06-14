import { Component, OnInit, DoCheck } from '@angular/core';
import { ChuckNorrisFactsService } from '../facts/chuck-norris-facts.service';
import { ChuckNorrisFact } from '../facts/chuck-norris-fact.model';
import { FavoriteService } from '../favorites-list/favorite.service';
import { UserAuthenticationService } from '../user/user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.css']
})
export class FactsListComponent implements OnInit {
  facts: ChuckNorrisFact[] = [];

  constructor(
    private chuckNorrisFactsService: ChuckNorrisFactsService,
    private router: Router, 
    private userAuthentication:UserAuthenticationService, 
    private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.chuckNorrisFactsService.getFacts(10)
      .subscribe(facts => this.facts = facts)
  }

  favorite(fact: ChuckNorrisFact) {
    if(!this.userAuthentication.userIsLoggedIn()){
      this.router.navigate(['/login']);
      return;
    }

    fact.favorite = !fact.favorite;
    if (fact.favorite) {
      this.favoriteService.addFactToFavorites(fact);
    } else {
      this.favoriteService.removeFactFromFavorites(fact);
    }
  }

  unfavorite(fact: ChuckNorrisFact) {
    fact.favorite = false;
    this.favoriteService.removeFactFromFavorites(fact);
  }

  search(searchKeyword: string){
    this.chuckNorrisFactsService.searchFact(searchKeyword)
    .subscribe(facts => {
      this.facts = facts.result;
    })
  }
}
