import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ServiceDetails} from '../serviceDetails';
import {SalonService} from '../angularServices/salon.service';
import {ActivatedRoute} from '@angular/router';
import {ServiceDetailsService} from '../angularServices/serviceDetails.service';
import {Time} from '@angular/common';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  @ViewChild('form') reserveForm!: NgForm;
  data!: any;
  isSubmitted = false;

  salon: any;
  serviceDetails: ServiceDetails[] | undefined;
  selectedService: any;

  onFormSubmit(): void {
    this.isSubmitted = true;
    console.log('Entered reservation' + this.data.value);
  }

  constructor(private serviceDetailsService: ServiceDetailsService,
              private salonService: SalonService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = {
      time: undefined,
      date: undefined,
      fullName: '',
      tel: '',
      comment: ''
    },

      setTimeout(() => {
        this.reserveForm.setValue(this.data);
      });

    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.serviceDetails = this.serviceDetailsService.getSalonDetail(params.get('salonId')).detailedServicesList;
      this.salon = this.salonService.getSalon(params.get('salonId'));
    });
    this.activatedRouter.queryParamMap.subscribe(queryParams => {
      console.log('******query params: ', queryParams);
    });

  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isSubmitted) {
      return confirm('Discard unsaved data?');
    }
    return true;
  }

}
