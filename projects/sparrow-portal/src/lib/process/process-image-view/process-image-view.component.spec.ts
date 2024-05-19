import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessImageViewComponent } from './process-image-view.component';

describe('ProcessImageViewComponent', () => {
  let component: ProcessImageViewComponent;
  let fixture: ComponentFixture<ProcessImageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessImageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
