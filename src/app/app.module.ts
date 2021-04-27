import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesCardComponent } from './categories-card/categories-card.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ServicesComponent } from './services/services.component';
import { SalonComponent } from './salon/salon.component';
import {ToUsdPipe} from './pipes/to-usd.pipe.';
import {SalonService} from './angularServices/salon.service';
import {LoggingService} from './angularServices/logging.service';
import {SalonServicesService} from './angularServices/salon-services.service';
import {CategoryService} from "./angularServices/category.service";
import { ReservationComponent } from './reservation/reservation.component';
import {ServiceDetailsService} from "./angularServices/serviceDetails.service";
import {FormsModule} from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReserviationGuardService} from "./guard/reserviation-guard.service";
import { ProfileComponent } from './profile/profile.component';
import {AuthGuardService} from "./guard/auth-guard.service";
import {AuthService} from "./angularServices/auth.service";
import { ReserveDataComponent } from './profile/reserve-data/reserve-data.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesCardComponent,
    HomeComponent,
    CardComponent,
    ServicesComponent,
    SalonComponent,
    ToUsdPipe,
    ReservationComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    ReserveDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [SalonService, LoggingService, CategoryService, SalonServicesService, ServiceDetailsService, ReserviationGuardService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
