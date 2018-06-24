import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ChuckNorrisFact } from '../../facts/chuck-norris-fact.model';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {

  constructor() { }
  @Input() fact;
  @Output() favoriteEvent: EventEmitter<ChuckNorrisFact> = new EventEmitter();

  ngOnInit() {
  }

  private favorite(fact:ChuckNorrisFact): void {
    this.favoriteEvent.emit(fact);
  }

}
