import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleApiComponent } from './rule-api.component';

describe('RuleApiComponent', () => {
  let component: RuleApiComponent;
  let fixture: ComponentFixture<RuleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
