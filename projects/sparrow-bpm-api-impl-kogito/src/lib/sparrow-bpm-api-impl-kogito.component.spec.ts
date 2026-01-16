import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowBpmApiImplKogitoComponent } from './sparrow-bpm-api-impl-kogito.component';

describe('SparrowBpmApiImplKogitoComponent', () => {
  let component: SparrowBpmApiImplKogitoComponent;
  let fixture: ComponentFixture<SparrowBpmApiImplKogitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparrowBpmApiImplKogitoComponent]
    });
    fixture = TestBed.createComponent(SparrowBpmApiImplKogitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
