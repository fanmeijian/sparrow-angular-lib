import { TestBed } from '@angular/core/testing';

import { SparrowBpmApiImplKogitoService } from './sparrow-bpm-api-impl-kogito.service';

describe('SparrowBpmApiImplKogitoService', () => {
  let service: SparrowBpmApiImplKogitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowBpmApiImplKogitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
