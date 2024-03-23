import { TestBed } from '@angular/core/testing';

import { SparrowTestLibService } from './sparrow-test-lib.service';

describe('SparrowTestLibService', () => {
  let service: SparrowTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
