import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SalonService} from '../angularServices/salon.service';
import {Salon} from '../salon';
import {SalonServiceData} from '../salonServiceData';
import {SalonServicesService} from '../angularServices/salon-services.service';
import {LoggingService} from '../angularServices/logging.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  salonServices!: SalonServiceData[];
  salons!: Salon[];
  service: any;
  result: any;

  getService(id: string | null): void {
    this.service = this.salonServices.find(x => x.id === id);
  }

  // tslint:disable-next-line:max-line-length
  constructor(private loggingService: LoggingService, private salonService: SalonService, private salonServicesService: SalonServicesService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      this.salons = this.salonService.getSalonList();
      this.salonServices = this.salonServicesService.getSalonServices();
      console.log('activatedRouter.params: ', params);
      this.getService(params.get('id'));
    });
    this.result = this.salons.filter(s => s.service.includes(this.service.name));

    this.loggingService.log('The user went to the \'' + this.service.name + '\' service page');
  }



}
