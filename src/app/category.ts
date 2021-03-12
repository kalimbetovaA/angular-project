import {Salon} from './salon';

export class Category {
  title: string;
  salons: Salon[] | undefined;

  constructor(title: string,
              salons: Salon[] | undefined) {
    this.title = title;
    this.salons = salons;
  }
}

