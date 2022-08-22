import { TestBed } from '@angular/core/testing';

import { HyPowerService } from './hy-power.service';

describe('HyPowerService', () => {
  let service: HyPowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyPowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
