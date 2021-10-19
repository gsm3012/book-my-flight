import { Component, OnInit } from '@angular/core';
import { FlightaddService } from 'src/app/Services/flightadd.service';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor(private service:FlightsearchServiceService, private flightService : FlightaddService) { }

  ngOnInit(): void {
  }


  flightNumber='';

flight:any={}

  fetchFlight()
  {
    this.service.searchSingleFlight(this.flightNumber).subscribe((data)=>{
      this.flight=data;
    },
    (error)=>{
      alert("error");
    }
    )
  }

  deleteFLight(id : String)
  {
      this.flightService.flightDelete(id).subscribe(data=>{
        alert("deleted");
      },
      error=>{
        alert("error");
      }
      )
  }

}
