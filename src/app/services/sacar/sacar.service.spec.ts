import { TestBed } from '@angular/core/testing';

import { SacarService } from '../sacar/sacar.service';

describe('SacarService', () => {
  let service: SacarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SacarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
