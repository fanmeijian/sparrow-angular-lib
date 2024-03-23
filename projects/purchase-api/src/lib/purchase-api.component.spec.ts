import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseApiComponent } from './purchase-api.component';

describe('PurchaseApiComponent', () => {
  let component: PurchaseApiComponent;
  let fixture: ComponentFixture<PurchaseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
