import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
    dataArr = [
    {
      title: "Лучшее от Zapis.kz",
      salons: [{
        image: "https://zapis.kz/data/pics/salon/pic-11164.jpg?v=1",
        salon: "Hikari Lazer"
      },
      {
        image: "https://zapis.kz/data/pics/salon/pic-971.jpg?v=1",
        salon: "Barbershop Klaus"
      },
      {
        image: "https://zapis.kz/data/pics/salon/pic-38244.jpg?v=0",
        salon: "Lilu"
      },
      {
        image: "https://zapis.kz/data/pics/salon/pic-26851.jpg?v=1",
        salon: "SASS AFD Plaza"
      }
      ]
    },
    {
      title: "Салоны с кэшбеком",
      salons: [ {
        image: "https://zapis.kz/data/pics/salon/pic-33493.jpg?v=1",
        salon: "QUEEN BEE"
      },
      {
        image: "https://zapis.kz/data/pics/salon/pic-18246.jpg?v=0",
        salon: "«Бороду не брей» на Акан Cеры"
      },
      {
        image: "https://zapis.kz/data/pics/salon/pic-7656.jpg?v=0",
        salon: "Vilena"
      },
      {
        image: "https://zapis.kz/data/pics/salon/pic-5061.jpg?v=1",
        salon: "Sandi Beksirga на Наурызбай батыра"
      }
      ]
    }
    
    ];
}
