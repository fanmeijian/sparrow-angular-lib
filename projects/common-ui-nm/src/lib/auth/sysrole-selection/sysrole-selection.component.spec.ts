import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysroleSelectionComponent } from './sysrole-selection.component';

describe('SysroleSelectionComponent', () => {
  let component: SysroleSelectionComponent;
  let fixture: ComponentFixture<SysroleSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SysroleSelectionComponent]
    });
    fixture = TestBed.createComponent(SysroleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
