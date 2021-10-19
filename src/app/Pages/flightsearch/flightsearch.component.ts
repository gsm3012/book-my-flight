import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { FlightsearchServiceService } from 'src/app/Services/flightsearch-service.service';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class flightsearchComponent implements OnInit {

  constructor(private find:FlightsearchServiceService) { }

  ngOnInit(): void {
  }

  search = new FormGroup({
    toPlace : new FormControl(''),
    fromPlace : new FormControl(''),
    flightDate : new FormControl(''),
    returnDate : new FormControl('')
  });

searchFlight()
{
  this.find.findFlight(this.search.value).subscribe((data)=>{
    console.log(data);
  alert("success");
},
(error)=>{
  console.log(error);
});
}


}
