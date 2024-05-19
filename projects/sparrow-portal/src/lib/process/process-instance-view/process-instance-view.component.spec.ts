import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInstanceViewComponent } from './process-instance-view.component';

describe('ProcessInstanceViewComponent', () => {
  let component: ProcessInstanceViewComponent;
  let fixture: ComponentFixture<ProcessInstanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessInstanceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInstanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
