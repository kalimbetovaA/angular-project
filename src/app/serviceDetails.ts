export class ServiceDetails {
  name: string;
  price: number;
  master: string;
  constructor(name: string,
              price: number,
              master: string) {
    this.name = name;
    this.price = price;
    this.master = master;
  }
}
