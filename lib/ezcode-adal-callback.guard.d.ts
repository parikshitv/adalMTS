import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EZCodeAdalService } from './ezcode-adal.service';
import { EZCodeAdalConfigs } from './ezcode-adalconfig.service';
export declare class EZCodeAdalCallbackGuard implements CanActivate {
    private route;
    private router;
    private adalService;
    private configs;
    private _loading;
    constructor(route: ActivatedRoute, router: Router, adalService: EZCodeAdalService, configs: EZCodeAdalConfigs);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
