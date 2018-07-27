import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { EZCodeAdalService } from './ezcode-adal.service';

@Injectable()
export class EZCodeAdalComponentGuard implements CanActivate {
    constructor(private route: ActivatedRoute, private router: Router, private adalService: EZCodeAdalService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    let ret = false;
    // let navigationExtras: NavigationExtras = {
    //     queryParams: { 'redirectUrl': route.url }
    // };

    if (!this.adalService.userInfo) {
      //this.adalService.login();
      this.router.navigate([returnUrl + 'login']);
    } else {
      ret = true;
    }
    return ret;
  }
}
