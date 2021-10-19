import { Component, OnInit, Input } from '@angular/core';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';

@Component({
  selector: 'app-allflights',
  templateUrl: './allflights.component.html',
  styleUrls: ['./allflights.component.css']
})
export class AllflightsComponent implements OnInit {

  constructor(private service : FlightsearchServiceService) { }

  flights:any=[];

  ngOnInit(): void {

    this.service.searchFlight().subscribe(data=>{
      this.flights=data;
    },
    error=>{
      alert("error")
    }
    ); 
  }


// flight:any=[];

// getFlightData()
// {
//  this.flight = localStorage.getItem("flight");
//  console.log(this.flight);
// }
}
