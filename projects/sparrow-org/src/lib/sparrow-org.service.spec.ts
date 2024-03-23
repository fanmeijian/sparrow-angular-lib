import { TestBed } from '@angular/core/testing';

import { SparrowOrgService } from './sparrow-org.service';

describe('SparrowOrgService', () => {
  let service: SparrowOrgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowOrgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
