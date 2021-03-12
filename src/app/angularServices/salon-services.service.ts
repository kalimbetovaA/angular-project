import { Injectable } from '@angular/core';
import {SalonServiceData} from '../salonServiceData';


@Injectable()
export class SalonServicesService {
  salonServiceList = [
    new SalonServiceData('1', 'Парикмахерские услуги'),
    new SalonServiceData('1', 'Парикмахерские услуги'),
    new SalonServiceData('2', 'Ногтевой сервис'),
    new SalonServiceData('3', 'Брови'),
    new SalonServiceData('4', 'Удаление волос'),
    new SalonServiceData('5', 'Уход за телом'),
    new SalonServiceData('6', 'Макияж'),
    new SalonServiceData('7', 'Косметология'),
    new SalonServiceData('8', 'Тату и пирсинг')
  ];



  getSalonServices(): SalonServiceData[]{
    return this.salonServiceList;
  }

}

