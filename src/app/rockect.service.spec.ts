import { TestBed } from '@angular/core/testing';

import { RockectService } from './rockect.service';

describe('RockectService', () => {
  let service: RockectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
