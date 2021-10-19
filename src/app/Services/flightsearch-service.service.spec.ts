import { TestBed } from '@angular/core/testing';

import { FlightsearchServiceService } from './flightsearch-service.service';

describe('FlightsearchServiceService', () => {
  let service: FlightsearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
