import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) { }

  @Input() salon: any;

  salons = [
    {
      id: '1',
      image: 'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      salon: 'Hikari Lazer',
      type: 'Салон красоты',
      service: ['Удаление волос', 'Уход за телом', 'Косметология', 'Тату и пирсинг']
    },
    {
      id: '2',
      image: 'https://zapis.kz/data/pics/salon/pic-971.jpg?v=1',
      salon: 'Barbershop Klaus',
      type: 'Barbershop',
      service: ['Парикмахерские услуги', 'Тату и пирсинг']

    },
    {
      id: '3',
      image: 'https://zapis.kz/data/pics/salon/pic-38244.jpg?v=0',
      salon: 'Lilu',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология']

    },
    {
      id: '4',
      image: 'https://zapis.kz/data/pics/salon/pic-26851.jpg?v=1',
      salon: 'SASS AFD Plaza',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология']

    },
    {
      id: '5',
      image: 'https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1',
      salon: 'Dermalogica',
      type: 'Салон красоты',
      service: [ 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Косметология']


    },
    {
      id: '6',
      image: 'https://zapis.kz/data/pics/salon/pic-18978.jpg?v=0',
      salon: 'Main beauty and design',
      type: 'Студия красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Макияж']
    },
    {
      id: '7',
      image: 'https://zapis.kz/data/pics/salon/pic-18011.jpg?v=1',
      salon: 'Chocolate',
      type: 'Салон красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос', 'Уход за телом', 'Макияж', 'Косметология', 'Тату и пирсинг']
    },
    {
      id: '8',
      image: 'https://zapis.kz/data/pics/salon/pic-25791.jpg?v=1',
      salon: 'Aiya_Eyebrows',
      type: 'Студия красоты',
      service: ['Брови', 'Парикмахерские услуги', 'Ногтевой сервис', 'Удаление волос',  'Тату и пирсинг']
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
