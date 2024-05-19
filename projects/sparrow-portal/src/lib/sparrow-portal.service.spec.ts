import { TestBed } from '@angular/core/testing';

import { SparrowPortalService } from './sparrow-portal.service';

describe('SparrowPortalService', () => {
  let service: SparrowPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
