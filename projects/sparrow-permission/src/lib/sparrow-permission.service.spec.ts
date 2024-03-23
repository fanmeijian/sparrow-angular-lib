import { TestBed } from '@angular/core/testing';

import { SparrowPermissionService } from './sparrow-permission.service';

describe('SparrowPermissionService', () => {
  let service: SparrowPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
