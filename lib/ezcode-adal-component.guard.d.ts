import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EZCodeAdalService } from './ezcode-adal.service';
export declare class EZCodeAdalComponentGuard implements CanActivate {
    private route;
    private router;
    private adalService;
    constructor(route: ActivatedRoute, router: Router, adalService: EZCodeAdalService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
