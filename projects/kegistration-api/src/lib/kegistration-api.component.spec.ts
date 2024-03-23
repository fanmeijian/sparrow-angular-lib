import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KegistrationApiComponent } from './kegistration-api.component';

describe('KegistrationApiComponent', () => {
  let component: KegistrationApiComponent;
  let fixture: ComponentFixture<KegistrationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KegistrationApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KegistrationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
