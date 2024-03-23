import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionApiComponent } from './permission-api.component';

describe('PermissionApiComponent', () => {
  let component: PermissionApiComponent;
  let fixture: ComponentFixture<PermissionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
