"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./src/lib/plugin/ng-bootstrap/ng-bootstrap.module'));
__export(require('./src/lib/tour.module'));
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ng_bootstrap_module_2 = require('./src/lib/plugin/ng-bootstrap/ng-bootstrap.module');
var tour_module_2 = require('./src/lib/tour.module');
var tour_AppModule = (function () {
    function tour_AppModule() {
    }
    tour_AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [
                        ng_bootstrap_module_2.TourNgBootstrapModule,
                        tour_module_2.TourModule,
                        tour_module_2.TourService,
                        tour_module_2.TourConsoleModule
                    ],
                    imports: [
                        platform_browser_1.BrowserModule
                    ]
                },] },
    ];
    /** @nocollapse */
    tour_AppModule.ctorParameters = function () { return []; };
    return tour_AppModule;
}());
exports.tour_AppModule = tour_AppModule;
//# sourceMappingURL=index.js.map