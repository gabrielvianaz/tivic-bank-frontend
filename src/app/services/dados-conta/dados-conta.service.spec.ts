import { TestBed } from '@angular/core/testing';

import { DadosContaService } from '../dados-conta/dados-conta.service';

describe('DadosContaService', () => {
  let service: DadosContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
