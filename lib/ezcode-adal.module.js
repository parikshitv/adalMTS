"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var idtoken_callback_component_1 = require("./idtoken-callback.component");
var accesstoken_callback_component_1 = require("./accesstoken-callback.component");
var ezcode_http_interceptor_1 = require("./ezcode-http.interceptor");
var ezcode_adal_service_1 = require("./ezcode-adal.service");
var ezcode_adalconfig_service_1 = require("./ezcode-adalconfig.service");
var ezcode_adal_component_guard_1 = require("./ezcode-adal-component.guard");
var ezcode_adal_callback_guard_1 = require("./ezcode-adal-callback.guard");
var EZCodeAdalModule = /** @class */ (function () {
    function EZCodeAdalModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    EZCodeAdalModule.forRoot = function (config) {
        return {
            ngModule: EZCodeAdalModule,
            providers: [
                { provide: ezcode_adalconfig_service_1.EZCodeAdalConfigs, useValue: config }
            ]
        };
    };
    EZCodeAdalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        router_1.RouterModule.forChild([
                            { path: 'id_token', component: idtoken_callback_component_1.IdTokenCallbackComponent, canActivate: [ezcode_adal_callback_guard_1.EZCodeAdalCallbackGuard] },
                            //, canActivate: [EZCodeAdalGuard]
                            { path: 'access_token', component: accesstoken_callback_component_1.AccesstokenCallbackComponent, canActivate: [ezcode_adal_callback_guard_1.EZCodeAdalCallbackGuard] } //, canActivate: [EZCodeAdalGuard]
                        ])
                    ],
                    declarations: [
                        idtoken_callback_component_1.IdTokenCallbackComponent,
                        accesstoken_callback_component_1.AccesstokenCallbackComponent
                    ],
                    providers: [
                        [
                            { provide: http_1.HTTP_INTERCEPTORS, useClass: ezcode_http_interceptor_1.EZCodeHttpInterceptor, multi: true },
                        ],
                        ezcode_adal_component_guard_1.EZCodeAdalComponentGuard,
                        ezcode_adal_callback_guard_1.EZCodeAdalCallbackGuard,
                        ezcode_adalconfig_service_1.EZCodeAdalConfigs,
                        ezcode_adal_service_1.EZCodeAdalService
                    ]
                },] },
    ];
    /** @nocollapse */
    EZCodeAdalModule.ctorParameters = function () { return [
        { type: EZCodeAdalModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
    ]; };
    return EZCodeAdalModule;
}());
exports.EZCodeAdalModule = EZCodeAdalModule;
//# sourceMappingURL=ezcode-adal.module.js.map