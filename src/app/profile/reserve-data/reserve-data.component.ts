import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {AuthService} from '../../angularServices/auth.service';
import {SalonService} from "../../angularServices/salon.service";
import {Salon} from "../../salon";

@Component({
  selector: 'app-reserve-data',
  templateUrl: './reserve-data.component.html',
  styleUrls: ['./reserve-data.component.scss']
})
export class ReserveDataComponent implements OnInit {

  user: User | undefined;
  reservations!: any[];
  salonD!: Salon;

  constructor(private authService: AuthService, private salonService: SalonService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    if (this.user !== undefined){
      this.reservations = this.user.reservations;
    }
    this.getSalon('3');
  }


  getSalon(id: string): Salon {
    this.salonService.getSalon(id)
      .subscribe(salon => {
        this.salonD = salon;
        return this.salonD;
      });
    return this.salonD;
  }

}
