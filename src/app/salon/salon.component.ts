import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) { }

  openHours: Date[] = [new Date(0, 0, 0, 10, 0, 0, 0), new Date(0, 0, 0, 23, 0, 0, 0)];

  now: Date  = new Date();
  hours: number = this.now.getHours();

  @Input() salon: any;

  salons = [
    {
      id: '1',
      image: 'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      salon: 'Hikari Lazer',
      type: 'Салон красоты',
      service: ['Удаление волос', 'Уход за телом', 'Косметология', 'Тату и пирсинг'],
      rating: 5.0,
      averagePrice: 13000
    },
    {
      id: '2',
      image: 'https://zapis.kz/data/pics/salon/pic-971.jpg?v=1',
      salon: 'Barbershop Klaus',
      type: 'Barbershop',
      service: ['Парикмахерские услуги', 'Тату и пирсинг'],
      rating: 4.8,
      averagePrice: 10000
    },
    {
      id: '3',
      image: 'https://zapis.kz/data/pics/salon/pic-38244.jpg?v=0',
      salon: 'Lilu',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология'],
      rating: 4.6,
      averagePrice: 12000
    },
    {
      id: '4',
      image: 'https://zapis.kz/data/pics/salon/pic-26851.jpg?v=1',
      salon: 'SASS AFD Plaza',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология'],
      rating: 5.0,
      averagePrice: 15000

    },
    {
      id: '5',
      image: 'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      salon: 'Dermalogica',
      type: 'Салон красоты',
      service: [ 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Косметология'],
      rating: 4.9,
      averagePrice: 11000
    },
    {
      id: '6',
      image: 'https://zapis.kz/data/pics/salon/pic-18978.jpg?v=0',
      salon: 'Main beauty and design',
      type: 'Студия красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Макияж'],
      rating: 4.7,
      averagePrice: 7000
    },
    {
      id: '7',
      image: 'https://zapis.kz/data/pics/salon/pic-18011.jpg?v=1',
      salon: 'Chocolate',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология', 'Тату и пирсинг'],
      rating: 5.0,
      averagePrice: 12000
    },
    {
      id: '8',
      image: 'https://zapis.kz/data/pics/salon/pic-25791.jpg?v=1',
      salon: 'Aiya_Eyebrows',
      type: 'Студия красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос',  'Тату и пирсинг'],
      rating: 4.5,
      averagePrice: 5000
    }
  ];

  getSalon(id: string | null): void {
    this.salon = this.salons.find(x => x.id === id);
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.getSalon(params.get('id'));
    });
    this.activatedRouter.queryParamMap.subscribe(queryParams => {
      console.log('******query params: ', queryParams);
    });
  }

}
