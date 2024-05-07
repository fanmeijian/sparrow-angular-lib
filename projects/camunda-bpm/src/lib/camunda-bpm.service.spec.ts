import { TestBed } from '@angular/core/testing';

import { CamundaBpmService } from './camunda-bpm.service';

describe('CamundaBpmService', () => {
  let service: CamundaBpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamundaBpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
