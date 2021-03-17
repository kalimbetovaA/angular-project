import {Component, Input, OnInit} from '@angular/core';
import {ServiceDetails} from '../serviceDetails';
import {SalonService} from '../angularServices/salon.service';
import {ActivatedRoute} from '@angular/router';
import {ServiceDetailsService} from '../angularServices/serviceDetails.service';
import {Time} from "@angular/common";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  salon: any;
  serviceDetails: ServiceDetails[] | undefined;
  selectedService: any;
  time: Time | undefined;
  date: Date | undefined;
  fullName: string | undefined;
  tel: string | undefined;
  comment: string | undefined;

  constructor(private serviceDetailsService: ServiceDetailsService,
              private salonService: SalonService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.serviceDetails = this.serviceDetailsService.getSalonDetail(params.get('salonId')).detailedServicesList;
      this.salon = this.salonService.getSalon(params.get('salonId'));
    });
    this.activatedRouter.queryParamMap.subscribe(queryParams => {
      console.log('******query params: ', queryParams);
    });

  }

}
