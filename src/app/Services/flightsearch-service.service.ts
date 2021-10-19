import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FlightsearchServiceService {

  constructor(private http : HttpClient) { }

  // public findFlight(flightData:any)
  // {
  //   console.log(flightData);
  //   return this.http.get(`${baseUrl}/api/v1.0/user/flight/search/` + flightData.toPlace + `/` + flightData.fromPlace 
  //                         + `/` + flightData.flightDate + `/` + flightData.returnDate);
  // }



  public findFlight(flightData:any)
  {
    return this.http.get(`${baseUrl}/api/v1.0/user/flight/search`,flightData);
  }




  public searchFlight()
  {
   return this.http.get(`${baseUrl}/api/v1.0/admin/airline/get/flights`);
  }

  public searchScheduleFlights()
  {
   return this.http.get(`${baseUrl}/api/v1.0/admin/flight/schedule/getall`);
  }

  public searchSingleFlight(flightNumber : any)
  {
    return this.http.get(`${baseUrl}/api/v1.0/admin/airline/get/flight/`+flightNumber);
  }

  public searchScheduledFlight(flightId : any)
  {
    return this.http.get(`${baseUrl}/api/v1.0/admin/flight/schedule/get/`+flightId);
  }

  public deleteScheduleFlight(id : number)
  {
    return this.http.delete(`${baseUrl}/api/v1.0/admin/flight/schedule/cancel/` + id);
  }

  public updateScheduleFlight(data : any)
  {
    console.log(data);
    return this.http.put(`${baseUrl}/api/v1.0/admin/flight/schedule/change`, data);
  }


}
