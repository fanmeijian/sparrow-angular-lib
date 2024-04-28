import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessImageComponent } from './view-process-image.component';

describe('ViewProcessImageComponent', () => {
  let component: ViewProcessImageComponent;
  let fixture: ComponentFixture<ViewProcessImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProcessImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
