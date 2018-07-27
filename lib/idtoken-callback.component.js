"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ezcode_adal_service_1 = require("./ezcode-adal.service");
var IdTokenCallbackComponent = /** @class */ (function () {
    function IdTokenCallbackComponent(router, adalService) {
        this.router = router;
        this.adalService = adalService;
    }
    IdTokenCallbackComponent.prototype.ngOnInit = function () {
        if (this.adalService.userInfo) {
            this.router.navigate(['']);
        }
    };
    IdTokenCallbackComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: '<div>Please wait...</div>'
                },] },
    ];
    /** @nocollapse */
    IdTokenCallbackComponent.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: ezcode_adal_service_1.EZCodeAdalService, },
    ]; };
    return IdTokenCallbackComponent;
}());
exports.IdTokenCallbackComponent = IdTokenCallbackComponent;
//# sourceMappingURL=idtoken-callback.component.js.map