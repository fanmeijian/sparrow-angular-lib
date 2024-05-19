import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessRouteComponent } from './process-route.component';

describe('ProcessRouteComponent', () => {
  let component: ProcessRouteComponent;
  let fixture: ComponentFixture<ProcessRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
