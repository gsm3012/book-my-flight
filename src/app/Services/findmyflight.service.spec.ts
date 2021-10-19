import { TestBed } from '@angular/core/testing';

import { FindmyflightService } from './findmyflight.service';

describe('FindmyflightService', () => {
  let service: FindmyflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindmyflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
