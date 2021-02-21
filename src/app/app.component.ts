import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
    datax = [
    {
      title: "Лучшее от Zapis.kz",
      salons: new Array<string>('Hikari Lazer', 'Barbershop Klaus', 'Lilu', 'SASS AFD Plaza')
    },
    {
      title: "Салоны с кэшбеком",
      salons: new Array<string>('QUEEN BEE', '«Бороду не брей» на Акан Cеры', 'Vilena', 'Sandi Beksirga на Наурызбай батыра')
    }
    
    ];
}
