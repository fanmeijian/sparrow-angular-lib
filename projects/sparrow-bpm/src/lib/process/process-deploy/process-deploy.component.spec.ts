import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDeployComponent } from './process-deploy.component';

describe('ProcessDeployComponent', () => {
  let component: ProcessDeployComponent;
  let fixture: ComponentFixture<ProcessDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessDeployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
