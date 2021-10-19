import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ScheduleService } from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-scheduleflight',
  templateUrl: './scheduleflight.component.html',
  styleUrls: ['./scheduleflight.component.css']
})
export class ScheduleflightComponent implements OnInit {

  constructor(private scheduleService : ScheduleService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

schedule = new FormGroup({

  flight : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][-][0-9a-zA-z]+')]),
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



scheduleFlight()
{
  console.log(this.schedule);
  this.scheduleService.flightSchedule(this.schedule.value).subscribe((data)=>{
    this.snack.open("Flight Schedule Successfully.", "ok", {
      duration:7000
    });
  },

  (error)=>{
    console.log(error);
  }
  )
}


}
