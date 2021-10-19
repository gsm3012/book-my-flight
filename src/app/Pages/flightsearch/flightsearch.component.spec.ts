import { ComponentFixture, TestBed } from '@angular/core/testing';

import { flightsearchComponent } from './flightsearch.component';

describe('flightsearchComponent', () => {
  let component: flightsearchComponent;
  let fixture: ComponentFixture<flightsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ flightsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(flightsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
