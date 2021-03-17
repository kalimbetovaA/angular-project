import { Injectable } from '@angular/core';
import {Salon} from '../salon';


@Injectable()
export class SalonService {
  salonList = [
    new Salon(
      '1',
      'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      'Hikari Lazer',
      'Салон красоты',
      ['Удаление волос', 'Уход за телом', 'Косметология', 'Тату и пирсинг'],
      5.0,
      13000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
      'Лучшее от Zapis.kz'
    ),
    new Salon('2',
       'https://zapis.kz/data/pics/salon/pic-971.jpg?v=1',
       'Barbershop Klaus',
       'Barbershop',
       ['Парикмахерские услуги', 'Тату и пирсинг'],
       4.8,
       10000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
      'Лучшее от Zapis.kz'
    ),
    new Salon('3',
       'https://zapis.kz/data/pics/salon/pic-38244.jpg?v=0',
       'Lilu',
       'Салон красоты',
       ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология'],
       4.6,
       12000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
    'Лучшее от Zapis.kz'
),
    new Salon('4',
       'https://zapis.kz/data/pics/salon/pic-26851.jpg?v=1',
       'SASS AFD Plaza',
       'Салон красоты',
       ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология'],
       5.0,
       15000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
      'Лучшее от Zapis.kz'
),
    new Salon('5',
       'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
       'Dermalogica',
       'Салон красоты',
       [ 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Косметология'],
       4.9,
       11000,
        [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
  'Салоны с кэшбеком'
),
    new Salon('6',
       'https://zapis.kz/data/pics/salon/pic-18978.jpg?v=0',
       'Main beauty and design',
       'Студия красоты',
       ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Макияж'],
       4.7,
       7000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
      'Салоны с кэшбеком'
),
    new Salon('7',
       'https://zapis.kz/data/pics/salon/pic-18011.jpg?v=1',
       'Chocolate',
       'Салон красоты',
       ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология', 'Тату и пирсинг'],
       5.0,
       12000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
      'Салоны с кэшбеком'
),
    new Salon('8',
       'https://zapis.kz/data/pics/salon/pic-25791.jpg?v=1',
       'Aiya_Eyebrows',
       'Студия красоты',
       ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос',  'Тату и пирсинг'],
       4.5,
       5000,
      [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)],
      'Салоны с кэшбеком'
)
  ];

  getSalonList(): Salon[]{
    return this.salonList;
  }

  getSalon(id: string | null): any {
    return this.salonList.find(x => x.id === id);
  }

}

