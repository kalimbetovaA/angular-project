export class Salon {
  id: string;
  salon: string;
  imageURL: string;
  type: string;
  service: string[];
  rating: number;
  averagePrice: number;
  openHours: Date[];
  category: string;
  constructor(id: string,
              imageURL: string,
              salon: string,
              type: string,
              service: string[],
              rating: number,
              averagePrice: number,
              openHours: Date[],
              category: string) {
    this.id = id;
    this.salon = salon;
    this.imageURL = imageURL;
    this.type = type;
    this.service = service;
    this.rating = rating;
    this.averagePrice = averagePrice;
    this.openHours = openHours;
    this.category = category;
  }
}
