import { Component } from '@angular/core';
import { ChuckNorrisFactsService } from './chuck-norris-facts.service';
import { IChuckNorrisFact } from './chuck-norris-fact.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  facts: IChuckNorrisFact[];
  constructor(private chuckNorrisFacts: ChuckNorrisFactsService){

  }

  ngOnInit(){
    this.facts = this.chuckNorrisFacts.getFacts();
  }
}
