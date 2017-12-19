import { TestBed, inject } from '@angular/core/testing';

import { MatchApiService } from './match-api.service';

describe('MatchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchApiService]
    });
  });

  it('should be created', inject([MatchApiService], (service: MatchApiService) => {
    expect(service).toBeTruthy();
  }));
});
