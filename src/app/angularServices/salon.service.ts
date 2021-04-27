import { Injectable } from '@angular/core';
import {Salon} from '../salon';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from "../category";


@Injectable()
export class SalonService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  getSalonList(): Observable<Salon[]>{
    return this.http.get<Salon[]>(this.baseURL + `/salons`);
  }

  getSalon(id: string | null): any {
    return this.http.get<Salon>(this.baseURL + `/salons/${id}`);
  }

}

