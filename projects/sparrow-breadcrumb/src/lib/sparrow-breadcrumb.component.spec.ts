import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparrowBreadcrumbComponent } from './sparrow-breadcrumb.component';

describe('SparrowBreadcrumbComponent', () => {
  let component: SparrowBreadcrumbComponent;
  let fixture: ComponentFixture<SparrowBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparrowBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparrowBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
