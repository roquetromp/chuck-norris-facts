import { Component, OnInit, DoCheck } from '@angular/core';
import { ChuckNorrisFactsService } from '../facts/chuck-norris-facts.service';
import { ChuckNorrisFact } from '../facts/chuck-norris-fact.model';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.css']
})
export class FactsListComponent implements OnInit {
  facts: ChuckNorrisFact[] = [];

  constructor(private chuckNorrisFactsService: ChuckNorrisFactsService, private userListService: UserListService) { }

  ngOnInit() {
    this.chuckNorrisFactsService.getFacts(10)
      .subscribe(fact => this.facts.push(fact))
  }

  favorite(fact: ChuckNorrisFact) {
    fact.favorite = !fact.favorite;
    if (fact.favorite) {
      this.userListService.addFactToFavorites(fact);
    } else {
      this.userListService.removeFactFromFavorites(fact);
    }
  }

  unfavorite(fact: ChuckNorrisFact) {
    fact.favorite = false;
    this.userListService.removeFactFromFavorites(fact);
  }

  search(searchKeyword: string){
    this.chuckNorrisFactsService.searchFact(searchKeyword)
    .subscribe(facts => {
      this.facts = facts.result;
    })
  }
}
