import { TestBed } from '@angular/core/testing';

import { MenuRouteGuard } from './menu-route.guard';

describe('MenuRouteGuard', () => {
  let guard: MenuRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MenuRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
