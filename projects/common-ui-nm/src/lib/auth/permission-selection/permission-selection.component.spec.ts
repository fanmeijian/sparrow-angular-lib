import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionSelectionComponent } from './permission-selection.component';

describe('PermissionSelectionComponent', () => {
  let component: PermissionSelectionComponent;
  let fixture: ComponentFixture<PermissionSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionSelectionComponent]
    });
    fixture = TestBed.createComponent(PermissionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
