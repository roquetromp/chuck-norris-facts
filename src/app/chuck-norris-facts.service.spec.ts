import { TestBed, inject } from '@angular/core/testing';

import { ChuckNorrisFactsService } from './chuck-norris-facts.service';

describe('ChuckNorrisFactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisFactsService]
    });
  });

  it('should be created', inject([ChuckNorrisFactsService], (service: ChuckNorrisFactsService) => {
    expect(service).toBeTruthy();
  }));
});
