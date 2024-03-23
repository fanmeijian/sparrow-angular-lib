import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowPermissionComponent } from './sparrow-permission.component';

describe('SparrowPermissionComponent', () => {
  let component: SparrowPermissionComponent;
  let fixture: ComponentFixture<SparrowPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
