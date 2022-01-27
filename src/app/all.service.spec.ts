import { TestBed } from '@angular/core/testing';

import { ALLService } from './all.service';

describe('ALLService', () => {
  let service: ALLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ALLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
