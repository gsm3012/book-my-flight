import { Component, OnInit } from '@angular/core';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';

@Component({
  selector: 'app-allscheduleflights',
  templateUrl: './allscheduleflights.component.html',
  styleUrls: ['./allscheduleflights.component.css']
})
export class AllscheduleflightsComponent implements OnInit {

flights:any=[];

  constructor(private service : FlightsearchServiceService) { }

  ngOnInit(): void {

    this.service.searchScheduleFlights().subscribe(data=>{
      this.flights=data;
    },
    error=>{
      alert("error")
    }
    ); 

  }

}
