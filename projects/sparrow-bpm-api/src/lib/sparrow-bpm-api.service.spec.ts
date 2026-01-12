import { TestBed } from '@angular/core/testing';

import { SparrowBpmApiService } from './sparrow-bpm-api.service';

describe('SparrowBpmApiService', () => {
  let service: SparrowBpmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowBpmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
