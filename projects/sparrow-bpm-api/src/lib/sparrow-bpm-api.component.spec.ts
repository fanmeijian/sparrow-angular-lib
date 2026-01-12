import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowBpmApiComponent } from './sparrow-bpm-api.component';

describe('SparrowBpmApiComponent', () => {
  let component: SparrowBpmApiComponent;
  let fixture: ComponentFixture<SparrowBpmApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparrowBpmApiComponent]
    });
    fixture = TestBed.createComponent(SparrowBpmApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
