"use strict";
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
    TourAnchorConsoleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[tourAnchor]',
                },] },
    ];
    /** @nocollapse */
    TourAnchorConsoleDirective.ctorParameters = function () { return [
        { type: tour_service_1.TourService, },
    ]; };
    TourAnchorConsoleDirective.propDecorators = {
        'tourAnchor': [{ type: core_1.Input },],
    };
    return TourAnchorConsoleDirective;
}());
exports.TourAnchorConsoleDirective = TourAnchorConsoleDirective;
//# sourceMappingURL=tour-anchor.directive.js.map