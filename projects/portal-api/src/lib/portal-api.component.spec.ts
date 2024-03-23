import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalApiComponent } from './portal-api.component';

describe('PortalApiComponent', () => {
  let component: PortalApiComponent;
  let fixture: ComponentFixture<PortalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
