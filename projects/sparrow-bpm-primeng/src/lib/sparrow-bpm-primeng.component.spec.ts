import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowBpmPrimengComponent } from './sparrow-bpm-primeng.component';

describe('SparrowBpmPrimengComponent', () => {
  let component: SparrowBpmPrimengComponent;
  let fixture: ComponentFixture<SparrowBpmPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowBpmPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowBpmPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
