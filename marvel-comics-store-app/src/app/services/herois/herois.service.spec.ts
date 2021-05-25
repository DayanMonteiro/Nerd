import { TestBed } from '@angular/core/testing';

import { HeroisService } from '../services/herois.service';

describe('HeroisService', () => {
  let service: HeroisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
