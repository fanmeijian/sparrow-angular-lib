import { TestBed } from '@angular/core/testing';

import { SparrowRuleService } from './sparrow-rule.service';

describe('SparrowRuleService', () => {
  let service: SparrowRuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparrowRuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
