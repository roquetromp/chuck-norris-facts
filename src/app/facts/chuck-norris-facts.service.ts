import { Injectable } from '@angular/core';
import { ChuckNorrisFact } from "./chuck-norris-fact.model";
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FavoriteService } from '../favorites-list/favorite.service';
import { FactsListComponent } from '../facts-list/facts-list.component';

const apiUrl = 'https://api.chucknorris.io/jokes';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisFactsService {
  cachedFacts: ChuckNorrisFact[] = [];

  constructor(private http: HttpClient, private favoriteService: FavoriteService) { }

  getFacts(count: number): Observable<ChuckNorrisFact> {
    let factObservable: Observable<ChuckNorrisFact>;

    if (this.cachedFacts.length > 0) {
      factObservable =  from(this.cachedFacts.slice());
    } else {
      factObservable = this.getNewFacts(count);
    }
    return factObservable.pipe(map(fact => this.updateFavoriteProperty(fact)))
    // return factObservable.pipe(map(fact => {
    //   fact.favorite = !!this.favoriteService.getFavoriteFacts().find( favorite => favorite.id === fact.id);
    //   return fact;
    // }));

  }

  getNewFacts(count: number = 10, category?: string): Observable<ChuckNorrisFact> {
    return new Observable<ChuckNorrisFact>((observer) => {
      for (let i = 0; i < count; i++) {
        this.fetchRandomFact(category).subscribe(fact => {
          this.cachedFacts.push(fact);
          observer.next(fact);
        });
      }
    })
  }

  searchFact(keyword: string): Observable<ChuckNorrisFact[]> {
    return this.http.get<any>(`${apiUrl}/search?query=${keyword}`)
      .pipe(map(response => response.result))
      .pipe(map(facts => facts.map( fact => this.updateFavoriteProperty(fact))))
      .pipe(tap(facts => this.cachedFacts = facts))
      // .pipe(tap(response => response.result.map( fact => this.updateFavoriteProperty(fact))))
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${apiUrl}/categories`);
  }

  private fetchRandomFact(category?: string): Observable<ChuckNorrisFact> {

    const query = category ? `?category=${category}` : '';
    return this.http.get<ChuckNorrisFact>(apiUrl + '/random' + query);
  }

  private updateFavoriteProperty(fact: ChuckNorrisFact): ChuckNorrisFact{
    fact.favorite = !!this.favoriteService.getFavoriteFacts().find( favorite => favorite.id === fact.id);
    return fact;
  }
}
