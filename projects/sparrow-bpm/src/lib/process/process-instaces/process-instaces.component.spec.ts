import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInstacesComponent } from './process-instaces.component';

describe('ProcessInstacesComponent', () => {
  let component: ProcessInstacesComponent;
  let fixture: ComponentFixture<ProcessInstacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessInstacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInstacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
