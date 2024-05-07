import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamundaBpmComponent } from './camunda-bpm.component';

describe('CamundaBpmComponent', () => {
  let component: CamundaBpmComponent;
  let fixture: ComponentFixture<CamundaBpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamundaBpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamundaBpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
