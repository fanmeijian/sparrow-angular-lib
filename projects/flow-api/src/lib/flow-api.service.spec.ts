import { TestBed } from '@angular/core/testing';

import { FlowApiService } from './flow-api.service';

describe('FlowApiService', () => {
  let service: FlowApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
