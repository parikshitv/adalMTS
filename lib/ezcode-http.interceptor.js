"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var ezcode_adal_service_1 = require("./ezcode-adal.service");
var EZCodeHttpInterceptor = /** @class */ (function () {
    function EZCodeHttpInterceptor(auth) {
        this.auth = auth;
    }
    EZCodeHttpInterceptor.prototype.intercept = function (req, next) {
        //return next.handle(req);
        return this.auth.getAccessTokenByUrl(req.url)
            .mergeMap(function (token) {
            var authReq = token == null ? req.clone() : req.clone({
                //headers: req.headers.set('Authorization', "bearer " + token)
                setHeaders: {
                    'Cache-control': 'no - cache',
                    'Pragma': 'no-cache',
                    'Expires': '-1',
                    'Authorization': "Bearer " + token
                }
            });
            return next.handle(authReq);
        });
    };
    EZCodeHttpInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    EZCodeHttpInterceptor.ctorParameters = function () { return [
        { type: ezcode_adal_service_1.EZCodeAdalService, },
    ]; };
    return EZCodeHttpInterceptor;
}());
exports.EZCodeHttpInterceptor = EZCodeHttpInterceptor;
//# sourceMappingURL=ezcode-http.interceptor.js.map