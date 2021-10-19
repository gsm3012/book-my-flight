import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FindmyflightService } from 'src/app/Services/findmyflight.service';

@Component({
  selector: 'app-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent implements OnInit {

  constructor(private service : FindmyflightService) { }

  ngOnInit(): void {
  }


  search = new FormGroup({
    toPlace : new FormControl(''),
  })

  flight:any = [];

  searchFlight()
  {
    this.service.findTheFlight(this.search.value).subscribe((data)=>{
      this.flight=data;
      console.log(this.flight);
    })
  }

}
