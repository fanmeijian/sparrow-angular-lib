import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgApiComponent } from './org-api.component';

describe('OrgApiComponent', () => {
  let component: OrgApiComponent;
  let fixture: ComponentFixture<OrgApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
