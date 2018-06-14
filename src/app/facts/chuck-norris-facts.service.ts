import { Injectable } from '@angular/core';
import { ChuckNorrisFact } from "./chuck-norris-fact.model";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'https://api.chucknorris.io/jokes';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisFactsService {
  cachedFacts: ChuckNorrisFact[] = [];

  constructor(private http: HttpClient) { }

  getFacts(count: number): Observable<ChuckNorrisFact[]> {
    console.log(this.cachedFacts)
    if (this.cachedFacts.length > 0) {
      return of(this.cachedFacts.slice());
    }
    return this.getNewFacts(count);

  }

  getNewFacts(count: number): Observable<ChuckNorrisFact[]> {
    this.cachedFacts = [];
    
    return new Observable<ChuckNorrisFact[]>((observer) => {
      for (let i = 0; i < count; i++) {
        this.fetchRandomFact().subscribe(fact => {
          this.cachedFacts.push(fact);
          observer.next(this.cachedFacts.slice());
        });
      }
    })
  }

  getFact(): Observable<ChuckNorrisFact> {
    return this.fetchRandomFact();
  }

  searchFact(keyword: string): Observable<any> {
    return this.http.get<any>(`${apiUrl}/search?query=${keyword}`)
      .pipe(tap(response => this.cachedFacts = response.result))
  }
  
  getCategories():Observable<string[]>{
    return this.http.get<string[]>(`${apiUrl}/categories`);
  }

  private fetchRandomFact(): Observable<ChuckNorrisFact> {
    return this.http.get<ChuckNorrisFact>(apiUrl + '/random');
  }
}

const CHUCK_NORRIS_FACTS: ChuckNorrisFact[] = [
  {
    "category": null,
    "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
    "id": "lOZR7Q8VTSalPV3sbcCeeQ",
    "url": "https:\/\/api.chucknorris.io\/jokes\/lOZR7Q8VTSalPV3sbcCeeQ",
    "value": "Chuck Norris won the 2011 Las Vegas Blackjack tournament by taking 22 hits on his last hand."
  }
]
