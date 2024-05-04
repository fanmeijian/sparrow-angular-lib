import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamundaApiComponent } from './camunda-api.component';

describe('CamundaApiComponent', () => {
  let component: CamundaApiComponent;
  let fixture: ComponentFixture<CamundaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamundaApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamundaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
