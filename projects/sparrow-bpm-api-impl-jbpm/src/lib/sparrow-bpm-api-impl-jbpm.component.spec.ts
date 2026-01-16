import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowBpmApiImplJbpmComponent } from './sparrow-bpm-api-impl-jbpm.component';

describe('SparrowBpmApiImplJbpmComponent', () => {
  let component: SparrowBpmApiImplJbpmComponent;
  let fixture: ComponentFixture<SparrowBpmApiImplJbpmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparrowBpmApiImplJbpmComponent]
    });
    fixture = TestBed.createComponent(SparrowBpmApiImplJbpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
