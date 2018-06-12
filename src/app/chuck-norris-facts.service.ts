import { Injectable } from '@angular/core';
import { IChuckNorrisFact } from "./chuck-norris-fact.interface";

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisFactsService {

  constructor() { }

  getFacts(): IChuckNorrisFact[] {
    return CHUCK_NORRIS_FACTS;
  }
}

const CHUCK_NORRIS_FACTS: IChuckNorrisFact[] = [
  {
    "category": null,
    "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
    "id": "lOZR7Q8VTSalPV3sbcCeeQ",
    "url": "https:\/\/api.chucknorris.io\/jokes\/lOZR7Q8VTSalPV3sbcCeeQ",
    "value": "Chuck Norris won the 2011 Las Vegas Blackjack tournament by taking 22 hits on his last hand."
  }
]
