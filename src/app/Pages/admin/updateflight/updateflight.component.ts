import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightaddService } from 'src/app/Services/flightadd.service';
import {ActivatedRoute} from '@angular/router';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';


@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  constructor(private service : FlightaddService, private snak : MatSnackBar, private rout : ActivatedRoute, private getService : FlightsearchServiceService) { }



  addFlight:any = new FormGroup({
    flightNumber : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][-][0-9a-zA-z]+')]),
    flightAirline : new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]),
    scheduleDays : new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')]),
    flightTime : new FormControl('', [Validators.required]),
    ticketCost : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    meal : new FormControl('', [Validators.required])
  });

  get flightNumber()
  {
    return this.addFlight.get('flightNumber');
  }

  get flightAirline()
  {
    return this.addFlight.get('flightAirline');
  }

  get scheduleDays()
  {
    return this.addFlight.get('scheduleDays');
  }

  get flightTime()
  {
    return this.addFlight.get('flightTime');
  }

  get ticketCost()
  {
    return this.addFlight.get('ticketCost');
  }

  get meal()
  {
    return this.addFlight.get('meal');
  }



  ngOnInit(): void {
    this.getService.searchSingleFlight(this.rout.snapshot.params.flightNumber).subscribe((data)=>{
      this.addFlight=data;
      this.addFlight = new FormGroup({
        flightNumber : new FormControl(this.addFlight.flightNumber),
        flightAirline : new FormControl(this.addFlight.flightAirline),
        scheduleDays : new FormControl(this.addFlight.scheduleDays),
        flightTime : new FormControl(this.addFlight.flightTime),
        ticketCost : new FormControl(this.addFlight.ticketCost),
        meal : new FormControl(this.addFlight.meal)
      });
    })
  }




  
  updateFlight()
  {
    this.service.updateFlight(this.addFlight.value).subscribe((data)=>{
      this.snak.open("Updated Successfully.", "ok", {
        duration : 7000
      });
    },
    (erro)=>{
      this.snak.open("Oops!!! Something went wrong.", "ok", {
        duration : 7000
      });
    }
    )
  }

}
