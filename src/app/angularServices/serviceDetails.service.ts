import { Injectable } from '@angular/core';
import {Salon} from '../salon';
import {ServiceDetails} from '../serviceDetails';


@Injectable()
export class ServiceDetailsService {
  detailList = [
    {salonId: '1',
      detailedServicesList: [
        new ServiceDetails('Ламинирование бровей', 6000, 'Жулдыз'),
        new ServiceDetails('Наращивание ресниц', 8000, 'Алина'),
        new ServiceDetails('Маникюр', 5000, 'Юлия'),
        new ServiceDetails('Педикюр', 7000, 'Юлия'),
        new ServiceDetails('Коррекция ресниц', 5000, 'Асель')
      ]
    },
    {salonId: '2',
      detailedServicesList: [
        new ServiceDetails('Укладка', 1000, 'Камиль'),
        new ServiceDetails('Стрижка мужская', 5000, 'Темирлан'),
        new ServiceDetails('Коррекция бороды', 2500, 'Рамир'),
        new ServiceDetails('Стрижка детская', 3000, 'Сергей')
      ]
    },
    {salonId: '3',
      detailedServicesList: [
        new ServiceDetails('Ламинирование бровей', 5000, 'Айдын'),
        new ServiceDetails('Наращивание ресниц', 5000, 'Катерина'),
        new ServiceDetails('Маникюр', 4000, 'Анель'),
        new ServiceDetails('Педикюр', 6000, 'Ирина')
      ]
    },
    {salonId: '4',
      detailedServicesList: [
        new ServiceDetails('Стрижка женская', 5500, 'Роза'),
        new ServiceDetails('Наращивание ресниц', 9000, 'Альбина'),
        new ServiceDetails('Маникюр + гель покрытие + снятие', 7000, 'Ляззат'),
        new ServiceDetails('Педикюр', 7000, 'Ирина'),
        new ServiceDetails('Коррекция ресниц', 5000, 'Асель')
      ]
    },
    {salonId: '5',
      detailedServicesList: [
        new ServiceDetails('Ламинирование бровей', 15000, 'Айдана'),
        new ServiceDetails('Коррекция бровей', 5000, 'Айдын'),
        new ServiceDetails('Массаж лица', 16000, 'Зарина'),
        new ServiceDetails('Face Fit', 10000, 'Ирина')
      ]
    },
    {salonId: '6',
      detailedServicesList: [
        new ServiceDetails('Ламинирование бровей', 5000, 'Асель'),
        new ServiceDetails('Укладка', 16000, 'Зарина'),
        new ServiceDetails('Маникюр', 4000, 'Анель'),
        new ServiceDetails('Педикюр', 6000, 'Катерина')
      ]
    },
    {salonId: '7',
      detailedServicesList: [
        new ServiceDetails('Коррекция бровей', 5000, 'Айгерим'),
        new ServiceDetails('Укладка', 16000, 'Камила'),
        new ServiceDetails('Маникюр', 5000, 'Аида'),
        new ServiceDetails('Педикюр', 7500, 'Катерина')
      ]
    },
    {salonId: '8',
      detailedServicesList: [
        new ServiceDetails('Маникюр', 4000, 'Анель'),
        new ServiceDetails('Ламинирование бровей', 5000, 'Айдын'),
        new ServiceDetails('Наращивание ресниц', 5000, 'Камила'),
        new ServiceDetails('Педикюр', 6000, 'Айгерим')
      ]
    }
  ];

  getSalonDetailList(): any{
    return this.detailList;
  }

  getSalonDetail(salonId: string | null): any {
    return this.detailList.find(x => x.salonId === salonId);
  }

}

