import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../angularServices/auth.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {User} from "../user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('form') userForm!: NgForm;
  user!: User;

  constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) { }


  onFormSubmit(): void {
    if (this.authService.isUserAuthenticated(this.user.tel, this.user.password)){
      this.router.navigate(['profile']);
    }
    console.log(this.userForm.value);
  }

  ngOnInit(): void {
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

}
