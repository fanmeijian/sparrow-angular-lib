import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowTestLibComponent } from './sparrow-test-lib.component';

describe('SparrowTestLibComponent', () => {
  let component: SparrowTestLibComponent;
  let fixture: ComponentFixture<SparrowTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowTestLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
