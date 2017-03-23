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
var tour_service_1 = require('../../tour.service');
var core_1 = require('@angular/core');
var TourAnchorConsoleDirective = (function () {
    function TourAnchorConsoleDirective(tourService) {
        this.tourService = tourService;
    }
    TourAnchorConsoleDirective.prototype.ngOnInit = function () {
        this.tourService.register(this.tourAnchor, this);
    };
    TourAnchorConsoleDirective.prototype.ngOnDestroy = function () {
        this.tourService.unregister(this.tourAnchor);
    };
    TourAnchorConsoleDirective.prototype.showTourStep = function (step) {
        console.group(step.title);
        console.log(step.content);
        console.log((step.placement || 'top') + " of " + this.tourAnchor);
        console.groupEnd();
    };
    TourAnchorConsoleDirective.prototype.hideTourStep = function () {
        return;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TourAnchorConsoleDirective.prototype, "tourAnchor", void 0);
    TourAnchorConsoleDirective = __decorate([
        core_1.Directive({
            selector: '[tourAnchor]',
        }), 
        __metadata('design:paramtypes', [tour_service_1.TourService])
    ], TourAnchorConsoleDirective);
    return TourAnchorConsoleDirective;
}());
exports.TourAnchorConsoleDirective = TourAnchorConsoleDirective;
//# sourceMappingURL=tour-anchor.directive.js.map