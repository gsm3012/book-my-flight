import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlightaddService } from 'src/app/Services/flightadd.service';


@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private service : FlightaddService, private snak : MatSnackBar){ }

  addFlight = new FormGroup({
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
  }

flightAdd()
{
  this.service.createFlight(this.addFlight.value).subscribe((data)=>{
    this.snak.open("Flight added successfully", "Ok", {
      duration: 7000})
      this.addFlight.reset();
  },
  (error)=>{
    this.snak.open("Oops!!! Something went wrong", "Ok", {
      duration: 7000})
   }
  );
}

}
