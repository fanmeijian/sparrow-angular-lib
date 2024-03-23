import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowFormComponent } from './sparrow-form.component';

describe('SparrowFormComponent', () => {
  let component: SparrowFormComponent;
  let fixture: ComponentFixture<SparrowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
