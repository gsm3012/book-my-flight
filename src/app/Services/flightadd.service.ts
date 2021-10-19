import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FlightaddService {

  constructor(private http : HttpClient) { }

public createFlight(data : any)
{

  console.log(data);

  return this.http.post(`${baseUrl}/api/v1.0/admin/airline/register`, data);
}

public flightDelete(id : String)
{
  return this.http.delete(`${baseUrl}/api/v1.0/admin/airline/delete/flight/` + id);
}

public updateFlight(data : any)
{
  return this.http.put(`${baseUrl}/api/v1.0/admin/airline/change/flight`, data);
}

}
