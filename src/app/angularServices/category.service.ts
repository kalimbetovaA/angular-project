import { Injectable } from '@angular/core';
import {Category} from '../category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Salon} from '../salon';


@Injectable()
export class CategoryService {

  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  getCategoriesData(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseURL + `/categories`);
  }

}

