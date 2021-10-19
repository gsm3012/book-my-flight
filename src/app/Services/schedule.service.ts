import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }

public flightSchedule(data : any)
{
  return this.http.post(`${baseUrl}/api/v1.0/admin/flight/schedule/create`, data);
}

}
