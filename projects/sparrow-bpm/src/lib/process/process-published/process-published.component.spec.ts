import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPublishedComponent } from './process-published.component';

describe('ProcessPublishedComponent', () => {
  let component: ProcessPublishedComponent;
  let fixture: ComponentFixture<ProcessPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessPublishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
