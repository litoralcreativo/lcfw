import { TestBed } from '@angular/core/testing';

import { LcTableService } from './lc-table.service';

describe('LcTableService', () => {
  let service: LcTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
