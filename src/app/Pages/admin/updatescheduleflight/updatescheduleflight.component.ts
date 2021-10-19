import { Component, OnInit } from '@angular/core';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatescheduleflight',
  templateUrl: './updatescheduleflight.component.html',
  styleUrls: ['./updatescheduleflight.component.css']
})
export class UpdatescheduleflightComponent implements OnInit {

  constructor(private service : FlightsearchServiceService, private rout : ActivatedRoute) { }


  schedule:any = new FormGroup({
    flightScheduleId : new FormControl(''),
    flightDate : new FormControl('', [Validators.required]),
    fromPlace : new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]),
    toPlace : new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]),
    businessClassSeat : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    nonBussinessClassSeat : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
  });
  
  get flight()
  {
    return this.schedule.get('flight');
  }
  
  get flightDate()
  {
    return this.schedule.get('flightDate');
  }
  
  get fromPlace()
  {
    return this.schedule.get('fromPlace');
  }
  
  get toPlace()
  {
    return this.schedule.get('toPlace');
  }
  
  get businessClassSeat()
  {
    return this.schedule.get('businessClassSeat');
  }
  
  get nonBussinessClassSeat()
  {
    return this.schedule.get('nonBussinessClassSeat');
  }

  ngOnInit(): void {

    this.service.searchScheduledFlight(this.rout.snapshot.params.flightScheduleId).subscribe((data)=>{
      this.schedule=data;
      this.schedule = new FormGroup({
        flightScheduleId : new FormControl(this.schedule.flightScheduleId),
        flightDate : new FormControl(this.schedule.flightDate),
        fromPlace : new FormControl(this.schedule.fromPlace),
        toPlace : new FormControl(this.schedule.toPlace),
        businessClassSeat : new FormControl(this.schedule.businessClassSeat),
        nonBussinessClassSeat : new FormControl(this.schedule.nonBussinessClassSeat)
    })

  },
  (error)=>{
    alert("error");
  }
    )
  }

  updateSchedule()
  {
    this.service.updateScheduleFlight(this.schedule.value).subscribe((data)=>{
      alert("Updated");
    },
    (error)=>{
      alert("error");
    }
    )
  };
}

