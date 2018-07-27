import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { EZCodeAdalService } from './ezcode-adal.service';
export declare class EZCodeHttpInterceptor implements HttpInterceptor {
    private auth;
    constructor(auth: EZCodeAdalService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
