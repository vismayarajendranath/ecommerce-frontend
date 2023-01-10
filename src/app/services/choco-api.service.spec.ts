import { TestBed } from '@angular/core/testing';

import { ChocoApiService } from './choco-api.service';

describe('ChocoApiService', () => {
  let service: ChocoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
