import { TestBed } from '@angular/core/testing';

import { TransferirService } from '../transferir/transferir.service';

describe('TransferirService', () => {
  let service: TransferirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
