import { TestBed } from '@angular/core/testing';

import { FlightaddService } from './flightadd.service';

describe('FlightaddService', () => {
  let service: FlightaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
