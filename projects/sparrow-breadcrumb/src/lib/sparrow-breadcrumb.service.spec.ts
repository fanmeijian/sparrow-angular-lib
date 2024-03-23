import { TestBed } from '@angular/core/testing';

import { SparrowBreadcrumbService } from './sparrow-breadcrumb.service';

describe('SparrowBreadcrumbService', () => {
  let service: SparrowBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
