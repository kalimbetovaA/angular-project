import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      name: 'Парикмахерские услуги',
      id: '1',
    },
    {
      name: 'Ногтевой сервис',
      id: '2',
    },
    {
      name: 'Брови',
      id: '3',
    },
    {
      name: 'Удаление волос',
      id: '4',
    },
    {
      name: 'Уход за телом',
      id: '5',
    },
    {
      name: 'Макияж',
      id: '6',
    },
    {
      name: 'Косметология',
      id: '7',
    },
    {
      name: 'Тату и пирсинг',
      id: '8',
    }
  ];

  salons = [
    {
      id: '1',
      image: 'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      salon: 'Hikari Lazer',
      type: 'Салон красоты',
      service: ['Удаление волос', 'Уход за телом', 'Косметология', 'Тату и пирсинг'],
      rating: 5.0
    },
    {
      id: '2',
      image: 'https://zapis.kz/data/pics/salon/pic-971.jpg?v=1',
      salon: 'Barbershop Klaus',
      type: 'Barbershop',
      service: ['Парикмахерские услуги', 'Тату и пирсинг'],
      rating: 4.8

    },
    {
      id: '3',
      image: 'https://zapis.kz/data/pics/salon/pic-38244.jpg?v=0',
      salon: 'Lilu',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология'],
      rating: 4.6
    },
    {
      id: '4',
      image: 'https://zapis.kz/data/pics/salon/pic-26851.jpg?v=1',
      salon: 'SASS AFD Plaza',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология'],
      rating: 5.0

    },
    {
      id: '5',
      image: 'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      salon: 'Dermalogica',
      type: 'Салон красоты',
      service: [ 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Косметология'],
      rating: 4.9

    },
    {
      id: '6',
      image: 'https://zapis.kz/data/pics/salon/pic-18978.jpg?v=0',
      salon: 'Main beauty and design',
      type: 'Студия красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Макияж'],
      rating: 4.7
    },
    {
      id: '7',
      image: 'https://zapis.kz/data/pics/salon/pic-18011.jpg?v=1',
      salon: 'Chocolate',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология', 'Тату и пирсинг'],
      rating: 5.0
    },
    {
      id: '8',
      image: 'https://zapis.kz/data/pics/salon/pic-25791.jpg?v=1',
      salon: 'Aiya_Eyebrows',
      type: 'Студия красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос',  'Тату и пирсинг'],
      rating: 4.5
    }
  ];
  service: any;
  result: any;

  getService(id: string | null): void {
    this.service = this.services.find(x => x.id === id);
  }

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.getService(params.get('id'));
    });
    this.result = this.salons.filter(s => s.service.includes(this.service.name));
  }



}
