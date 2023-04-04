import { TestBed } from '@angular/core/testing';

import { DepositarService } from './depositar.service';

describe('DepositarService', () => {
  let service: DepositarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
