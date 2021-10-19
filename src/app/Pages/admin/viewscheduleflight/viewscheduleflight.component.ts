import { Component, OnInit } from '@angular/core';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';

@Component({
  selector: 'app-viewscheduleflight',
  templateUrl: './viewscheduleflight.component.html',
  styleUrls: ['./viewscheduleflight.component.css']
})
export class ViewscheduleflightComponent implements OnInit {

  constructor(private service : FlightsearchServiceService) { }

  ngOnInit(): void {
  }

  flightScheduleId:any;

  schedule:any={};

  fetchScheduleFlight()
  {
    this.service.searchScheduledFlight(this.flightScheduleId).subscribe(data=>{
      this.schedule=data;
    },
    error=>{
      alert("error");
    }
    )
  }

  deleteSchedule(id : number)
  {
    this.service.deleteScheduleFlight(id).subscribe((data)=>{
      alert("deleted");
    },
    (error)=>{
      alert("error");
    }
    )
  }


}
