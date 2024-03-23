import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowKeycloakAdminApiComponent } from './sparrow-keycloak-admin-api.component';

describe('SparrowKeycloakAdminApiComponent', () => {
  let component: SparrowKeycloakAdminApiComponent;
  let fixture: ComponentFixture<SparrowKeycloakAdminApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowKeycloakAdminApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowKeycloakAdminApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
