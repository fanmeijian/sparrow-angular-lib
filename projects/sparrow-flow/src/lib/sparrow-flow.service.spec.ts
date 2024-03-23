import { TestBed } from '@angular/core/testing';

import { SparrowFlowService } from './sparrow-flow.service';

describe('SparrowFlowService', () => {
  let service: SparrowFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
