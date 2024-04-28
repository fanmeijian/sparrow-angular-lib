import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProcessInstancesComponent } from './my-process-instances.component';

describe('MyProcessInstancesComponent', () => {
  let component: MyProcessInstancesComponent;
  let fixture: ComponentFixture<MyProcessInstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProcessInstancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProcessInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
