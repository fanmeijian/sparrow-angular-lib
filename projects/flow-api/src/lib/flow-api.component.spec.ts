import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowApiComponent } from './flow-api.component';

describe('FlowApiComponent', () => {
  let component: FlowApiComponent;
  let fixture: ComponentFixture<FlowApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
