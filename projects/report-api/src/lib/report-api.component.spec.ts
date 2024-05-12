import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportApiComponent } from './report-api.component';

describe('ReportApiComponent', () => {
  let component: ReportApiComponent;
  let fixture: ComponentFixture<ReportApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
