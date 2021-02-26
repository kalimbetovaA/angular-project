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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesCardComponent,
    HomeComponent,
    CardComponent,
    ServicesComponent,
    SalonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
