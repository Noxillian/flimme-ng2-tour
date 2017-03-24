"use strict";
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var core_1 = require('@angular/core');
var tour_module_1 = require('../../tour.module');
var tour_anchor_directive_1 = require('./tour-anchor.directive');
exports.TourAnchorConsoleDirective = tour_anchor_directive_1.TourAnchorConsoleDirective;
var common_1 = require('@angular/common');
var TourConsoleModule = (function () {
    function TourConsoleModule() {
    }
    TourConsoleModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [tour_anchor_directive_1.TourAnchorConsoleDirective],
                    exports: [tour_anchor_directive_1.TourAnchorConsoleDirective],
                    imports: [tour_module_1.TourModule, common_1.CommonModule, ng_bootstrap_1.NgbPopoverModule.forRoot()],
                },] },
    ];
    /** @nocollapse */
    TourConsoleModule.ctorParameters = function () { return []; };
    return TourConsoleModule;
}());
exports.TourConsoleModule = TourConsoleModule;
//# sourceMappingURL=console.module.js.map