import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowFlowComponent } from './sparrow-flow.component';

describe('SparrowFlowComponent', () => {
  let component: SparrowFlowComponent;
  let fixture: ComponentFixture<SparrowFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
