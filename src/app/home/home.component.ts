import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataArr = [
    {
      title: "Лучшее от Zapis.kz",
      salons: [
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

        }
        ]
    },
    {
      title: "Салоны с кэшбеком",
      salons: [ {
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
      ]
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
