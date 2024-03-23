import { TestBed } from '@angular/core/testing';

import { SparrowBpmService } from './sparrow-bpm.service';

describe('SparrowBpmService', () => {
  let service: SparrowBpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowBpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
