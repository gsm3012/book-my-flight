import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FindmyflightService {

  constructor(private http:HttpClient) { }

public findTheFlight(toPlace : String)
{
  return this.http.get(`${baseUrl}/api/v1.0/user/flight/test/search/`+toPlace);
}

}
