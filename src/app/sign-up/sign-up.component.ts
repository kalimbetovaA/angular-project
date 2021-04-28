import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild('form') userForm!: NgForm;
  user!: User;
  confirmPassword: string | undefined;

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.confirmPassword = '';
    this.user = new User(1, '', '', ''),

      setTimeout(() => {
        this.userForm.setValue(this.user);
      });
    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
    });
    this.activatedRouter.queryParamMap.subscribe(queryParams => {
      console.log('******query params: ', queryParams);
    });
  }


  onFormSubmit(): void {
    console.log(this.userForm.value);
  }
}
