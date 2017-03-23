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
var console_module_1 = require('./plugin/console/console.module');
exports.TourConsoleModule = console_module_1.TourConsoleModule;
var tour_service_1 = require('./tour.service');
exports.TourService = tour_service_1.TourService;
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
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
    TourModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [common_1.CommonModule, router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], TourModule);
    return TourModule;
}());
exports.TourModule = TourModule;
;
//# sourceMappingURL=tour.module.js.map