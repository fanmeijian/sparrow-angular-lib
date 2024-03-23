import { TestBed } from '@angular/core/testing';

import { KegistrationApiService } from './kegistration-api.service';

describe('KegistrationApiService', () => {
  let service: KegistrationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KegistrationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
