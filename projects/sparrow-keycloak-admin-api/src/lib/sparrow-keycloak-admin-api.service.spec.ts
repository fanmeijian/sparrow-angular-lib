import { TestBed } from '@angular/core/testing';

import { SparrowKeycloakAdminApiService } from './sparrow-keycloak-admin-api.service';

describe('SparrowKeycloakAdminApiService', () => {
  let service: SparrowKeycloakAdminApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowKeycloakAdminApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
