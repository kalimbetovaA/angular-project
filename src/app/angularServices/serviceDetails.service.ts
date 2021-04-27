import { Injectable } from '@angular/core';
import {Salon} from '../salon';
import {ServiceDetails} from '../serviceDetails';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../category';


@Injectable()
export class ServiceDetailsService {


  baseURL = 'http://localhost:3000';
  detailedList!: any[];

  constructor(private http: HttpClient) {}


  getSalonDetailList(): any[]{
    this.http.get<any[]>(this.baseURL + `/salonDetailedServices`).subscribe(data => {
      this.detailedList = data; });
    return this.detailedList;
  }

  getSalonDetail(salonId: string | null): any {
    return this.getSalonDetailList().find(x => x.salonId === salonId);
  }

}

