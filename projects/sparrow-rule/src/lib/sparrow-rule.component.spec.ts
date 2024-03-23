import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowRuleComponent } from './sparrow-rule.component';

describe('SparrowRuleComponent', () => {
  let component: SparrowRuleComponent;
  let fixture: ComponentFixture<SparrowRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
