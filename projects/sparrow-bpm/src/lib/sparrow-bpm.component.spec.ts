import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowBpmComponent } from './sparrow-bpm.component';

describe('SparrowBpmComponent', () => {
  let component: SparrowBpmComponent;
  let fixture: ComponentFixture<SparrowBpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowBpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowBpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
