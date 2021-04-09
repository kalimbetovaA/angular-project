import { Component, OnInit } from '@angular/core';
import {AuthService} from '../angularServices/auth.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
  }

  getUsername(): string {
    if (this.user === undefined){
      return '';
    }
    return this.user.username;
  }


}
