import { TestBed } from '@angular/core/testing';

import { KeycloakAdminApiService } from './keycloak-admin-api.service';

describe('KeycloakAdminApiService', () => {
  let service: KeycloakAdminApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakAdminApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
