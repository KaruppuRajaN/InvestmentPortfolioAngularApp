import { TestBed } from '@angular/core/testing';

import { InvestmentappService } from './investmentapp.service';

describe('InvestmentappService', () => {
  let service: InvestmentappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
