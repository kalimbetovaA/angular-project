import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../angularServices/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) { }

  tel!: string;
  password!: string;


  onFormSubmit(): void {
    if (this.authService.isUserAuthenticated(this.tel, this.password)){
      this.router.navigate(['profile']);
    }
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
    });
    this.activatedRouter.queryParamMap.subscribe(queryParams => {
      console.log('******query params: ', queryParams);
    });
  }

}
