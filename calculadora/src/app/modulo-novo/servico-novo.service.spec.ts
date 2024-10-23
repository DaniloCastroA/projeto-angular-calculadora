import { TestBed } from '@angular/core/testing';

import { ServicoNovoService } from './servico-novo.service';

describe('ServicoNovoService', () => {
  let service: ServicoNovoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoNovoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
