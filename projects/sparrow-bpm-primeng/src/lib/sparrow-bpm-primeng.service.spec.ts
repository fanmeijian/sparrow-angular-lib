import { TestBed } from '@angular/core/testing';

import { SparrowBpmPrimengService } from './sparrow-bpm-primeng.service';

describe('SparrowBpmPrimengService', () => {
  let service: SparrowBpmPrimengService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowBpmPrimengService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
