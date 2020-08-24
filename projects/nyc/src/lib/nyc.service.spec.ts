import { TestBed } from '@angular/core/testing';

import { NycService } from './nyc.service';

describe('NycService', () => {
  let service: NycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
