

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServicesComponent } from './services/services.component';
import {SalonComponent} from './salon/salon.component';
import {ReservationComponent} from './reservation/reservation.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from "./sign-in/sign-in.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'services/:id', component: ServicesComponent},
  { path: 'salon/:id', component: SalonComponent},
  { path: 'reservation/:salonId', component: ReservationComponent}
];
