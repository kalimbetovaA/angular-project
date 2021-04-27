import { Injectable } from '@angular/core';
import {SalonServiceData} from '../salonServiceData';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class SalonServicesService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}



  getSalonServices(): Observable<SalonServiceData[]>{
    return this.http.get<SalonServiceData[]>(this.baseURL + `/salonServices`);
  }

}

