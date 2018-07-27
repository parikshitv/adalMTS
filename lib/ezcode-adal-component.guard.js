"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ezcode_adal_service_1 = require("./ezcode-adal.service");
var EZCodeAdalComponentGuard = /** @class */ (function () {
    function EZCodeAdalComponentGuard(route, router, adalService) {
        this.route = route;
        this.router = router;
        this.adalService = adalService;
    }
    EZCodeAdalComponentGuard.prototype.canActivate = function (route, state) {
        var returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        var ret = false;
        // let navigationExtras: NavigationExtras = {
        //     queryParams: { 'redirectUrl': route.url }
        // };
        if (!this.adalService.userInfo) {
            //this.adalService.login();
            this.router.navigate([returnUrl + 'login']);
        }
        else {
            ret = true;
        }
        return ret;
    };
    EZCodeAdalComponentGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    EZCodeAdalComponentGuard.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: router_1.Router, },
        { type: ezcode_adal_service_1.EZCodeAdalService, },
    ]; };
    return EZCodeAdalComponentGuard;
}());
exports.EZCodeAdalComponentGuard = EZCodeAdalComponentGuard;
//# sourceMappingURL=ezcode-adal-component.guard.js.map