import { Injectable } from '@angular/core';
import {Category} from '../category';
import {SalonService} from './salon.service';
import {Salon} from '../salon';


@Injectable()
export class CategoryService {
  categoriesData = [
    new Category('Лучшее от Zapis.kz', this.getSalonServices('Лучшее от Zapis.kz')),
    new Category('Салоны с кэшбеком', this.getSalonServices('Салоны с кэшбеком'))
  ];

  constructor(private salonService: SalonService) { }

  getCategoriesData(): Category[]{
    return this.categoriesData;
  }

  getSalonServices(category: string): Salon[] | undefined{
    return this.salonService.getSalonList().filter(x => x.category === category);
  }

}

