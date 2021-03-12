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
    ToUsdPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SalonService, LoggingService, CategoryService, SalonServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
