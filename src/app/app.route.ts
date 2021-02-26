

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServicesComponent } from './services/services.component';
import {SalonComponent} from './salon/salon.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'services/:id', component: ServicesComponent},
  { path: 'salon/:id', component: SalonComponent}
];
