import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowPortalComponent } from './sparrow-portal.component';

describe('SparrowPortalComponent', () => {
  let component: SparrowPortalComponent;
  let fixture: ComponentFixture<SparrowPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
