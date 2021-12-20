import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../models/passenger';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Passenger[]> {
    const url = 'http://www.angular.at/api/passenger';
    return this.httpClient.get<Passenger[]>(url);
  }

}
