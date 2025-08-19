import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableTreeComponent } from './sortable-tree.component';

describe('SortableTreeComponent', () => {
  let component: SortableTreeComponent;
  let fixture: ComponentFixture<SortableTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortableTreeComponent]
    });
    fixture = TestBed.createComponent(SortableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
