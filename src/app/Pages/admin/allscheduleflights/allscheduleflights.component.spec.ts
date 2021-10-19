import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscheduleflightsComponent } from './allscheduleflights.component';

describe('AllscheduleflightsComponent', () => {
  let component: AllscheduleflightsComponent;
  let fixture: ComponentFixture<AllscheduleflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllscheduleflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscheduleflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
