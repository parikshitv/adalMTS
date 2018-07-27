"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthenticationContext = require("adal-angular");
var Observable_1 = require("rxjs/Observable");
var ezcode_adalconfig_service_1 = require("./ezcode-adalconfig.service");
// import { Http } from '@angular/http';
//let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;
var EZCodeAdalService = /** @class */ (function () {
    function EZCodeAdalService(ezserve) {
        this.ezserve = ezserve;
        this.context = new AuthenticationContext(this.ezserve.adalconfigs[this.ezserve.customindex]);
        //this.context = new createAuthContextFn(this.ezserve.adalconfigs[this.ezserve.customindex]);
        this.config = this.ezserve.adalconfigs[this.ezserve.customindex];
    }
    EZCodeAdalService.prototype.setAdalContext = function () {
        this.config = this.ezserve.adalconfigs[this.ezserve.customindex];
        this.context.config = this.config;
    };
    EZCodeAdalService.prototype.login = function () {
        this.context.login();
    };
    EZCodeAdalService.prototype.logout = function () {
        this.context.logOut();
    };
    EZCodeAdalService.prototype.handleCallback = function () {
        this.context.handleWindowCallback();
    };
    Object.defineProperty(EZCodeAdalService.prototype, "userInfo", {
        get: function () {
            var adalUser = this.context.getCachedUser();
            return adalUser == null ? null :
                {
                    upn: adalUser.userName,
                    firstName: adalUser.profile["given_name"],
                    lastName: adalUser.profile["family_name"],
                    displayName: adalUser.profile["name"],
                    profile: adalUser.profile
                };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EZCodeAdalService.prototype, "accessToken", {
        get: function () {
            return this.context.getCachedToken(this.config.clientId);
        },
        enumerable: true,
        configurable: true
    });
    EZCodeAdalService.prototype.getAccessTokenByUrl = function (url) {
        var _this = this;
        return Observable_1.Observable.create(function (emitter) {
            var resourceId = _this.context.getResourceForEndpoint(url);
            if (resourceId != null) {
                _this.context.acquireToken(resourceId, function (message, token) {
                    emitter.next(token);
                    emitter.complete();
                });
            }
            else {
                emitter.next(null);
                emitter.complete();
            }
        });
    };
    Object.defineProperty(EZCodeAdalService.prototype, "isAuthenticated", {
        get: function () {
            return ((this.userInfo !== null) && (this.accessToken !== null));
        },
        enumerable: true,
        configurable: true
    });
    EZCodeAdalService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    EZCodeAdalService.ctorParameters = function () { return [
        { type: ezcode_adalconfig_service_1.EZCodeAdalConfigs, },
    ]; };
    return EZCodeAdalService;
}());
exports.EZCodeAdalService = EZCodeAdalService;
//# sourceMappingURL=ezcode-adal.service.js.map