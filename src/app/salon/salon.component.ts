import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Salon} from '../salon';
import {SalonService} from '../angularServices/salon.service';
import {LoggingService} from '../angularServices/logging.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  constructor(private salonService: SalonService, private loggingService: LoggingService,
              private activatedRouter: ActivatedRoute) { }

  currentHour: number = new Date().getHours();
  @Input() salon: any;
  salons!: Salon[];



  getSalon(id: string | null): void {
    this.salon = this.salons.find(x => x.id === id);
  }

  ngOnInit(): void {
    this.salonService.getSalonList()
      .subscribe(data => {
        this.salons = data,
          this.activatedRouter.paramMap.subscribe(params => {
            console.log('activatedRouter.params: ', params);
            this.getSalon(params.get('id'));
          });
        this.activatedRouter.queryParamMap.subscribe(queryParams => {
          console.log('******query params: ', queryParams);
        });

        this.loggingService.log('The user went to the \'' + this.salon.salon + '\' salon page');
      });



  }

}
