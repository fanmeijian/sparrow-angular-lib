import { TestBed } from '@angular/core/testing';

import { SparrowBpmApiImplJbpmService } from './sparrow-bpm-api-impl-jbpm.service';

describe('SparrowBpmApiImplJbpmService', () => {
  let service: SparrowBpmApiImplJbpmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowBpmApiImplJbpmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
