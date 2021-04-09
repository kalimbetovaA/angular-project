import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ReservationComponent} from '../reservation/reservation.component';
import {Observable} from 'rxjs';


@Injectable()
export class ReserviationGuardService implements CanDeactivate<ReservationComponent> {

  constructor() {}


  canDeactivate(component: ReservationComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('we are in CanDeactivate method!');
    return component.canDeactivate();
  }

}
