"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    tour_AppModule = __decorate([
        core_1.NgModule({
            exports: [
                ng_bootstrap_module_2.TourNgBootstrapModule,
                tour_module_2.TourModule,
                tour_module_2.TourService,
                tour_module_2.TourConsoleModule
            ],
            imports: [
                platform_browser_1.BrowserModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], tour_AppModule);
    return tour_AppModule;
}());
exports.tour_AppModule = tour_AppModule;
//# sourceMappingURL=index.js.map