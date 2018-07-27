"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ezcode_adal_service_1 = require("./ezcode-adal.service");
var ezcode_adalconfig_service_1 = require("./ezcode-adalconfig.service");
var EZCodeAdalCallbackGuard = /** @class */ (function () {
    function EZCodeAdalCallbackGuard(route, router, adalService, configs) {
        this.route = route;
        this.router = router;
        this.adalService = adalService;
        this.configs = configs;
    }
    EZCodeAdalCallbackGuard.prototype.canActivate = function (route, state) {
        var returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.adalService.handleCallback();
        this._loading = true;
        return false;
    };
    EZCodeAdalCallbackGuard.decorators = [
        { type: core_1.Injectable },
    ];
    //canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //        this.adalService.handleCallback();
    //      var customLoginRedirect: string = this.configs.customRedirectAfterLogin;
    //      if (this.adalService.userInfo) {
    //        if (customLoginRedirect) {
    //          this.router.navigate([customLoginRedirect]);
    //        } else {
    //          this.router.navigate(['']);
    //        }
    //            //this.router.navigate(['']);
    //            // var returnUrl = route.queryParams['returnUrl'];
    //            // if (!returnUrl) {
    //            //     this.router.navigate(['']);
    //            // } else {
    //            //     this.router.navigate([returnUrl], { queryParams: route.queryParams });
    //            // }
    //        }
    //        return false;
    //    }
    /** @nocollapse */
    EZCodeAdalCallbackGuard.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: router_1.Router, },
        { type: ezcode_adal_service_1.EZCodeAdalService, },
        { type: ezcode_adalconfig_service_1.EZCodeAdalConfigs, },
    ]; };
    return EZCodeAdalCallbackGuard;
}());
exports.EZCodeAdalCallbackGuard = EZCodeAdalCallbackGuard;
//# sourceMappingURL=ezcode-adal-callback.guard.js.map