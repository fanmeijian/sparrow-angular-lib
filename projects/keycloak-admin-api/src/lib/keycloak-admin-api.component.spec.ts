import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakAdminApiComponent } from './keycloak-admin-api.component';

describe('KeycloakAdminApiComponent', () => {
  let component: KeycloakAdminApiComponent;
  let fixture: ComponentFixture<KeycloakAdminApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeycloakAdminApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeycloakAdminApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
