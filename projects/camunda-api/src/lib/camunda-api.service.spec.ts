import { TestBed } from '@angular/core/testing';

import { CamundaApiService } from './camunda-api.service';

describe('CamundaApiService', () => {
  let service: CamundaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamundaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
