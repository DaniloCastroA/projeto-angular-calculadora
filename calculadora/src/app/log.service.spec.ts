import { TestBed } from '@angular/core/testing';

import { CalculadoraLogica } from './log.service';

describe('LogService', () => {
  let service: CalculadoraLogica;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraLogica);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
