"use strict";
var console_module_1 = require('./plugin/console/console.module');
exports.TourConsoleModule = console_module_1.TourConsoleModule;
var tour_service_1 = require('./tour.service');
exports.TourService = tour_service_1.TourService;
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import { HotkeyModule } from 'angular2-hotkeys';
var TourModule = (function () {
    function TourModule() {
    }
    TourModule.forRoot = function () {
        return {
            ngModule: TourModule,
            providers: [
                tour_service_1.TourService,
            ],
        };
    };
    TourModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [],
                    // exports: [HotkeyModule],
                    // imports: [CommonModule, HotkeyModule, RouterModule],
                    imports: [common_1.CommonModule, router_1.RouterModule],
                },] },
    ];
    /** @nocollapse */
    TourModule.ctorParameters = function () { return []; };
    return TourModule;
}());
exports.TourModule = TourModule;
;
//# sourceMappingURL=tour.module.js.map