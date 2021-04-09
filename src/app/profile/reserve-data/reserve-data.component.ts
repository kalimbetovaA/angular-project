import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {AuthService} from '../../angularServices/auth.service';

@Component({
  selector: 'app-reserve-data',
  templateUrl: './reserve-data.component.html',
  styleUrls: ['./reserve-data.component.scss']
})
export class ReserveDataComponent implements OnInit {
  //
  // user: User | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.user = this.authService.getLoggedInUser();
  }
  //
  // getUsername(): string {
  //   if (this.user === undefined){
  //     return '';
  //   }
  //   return this.user.username;
  // }

}
