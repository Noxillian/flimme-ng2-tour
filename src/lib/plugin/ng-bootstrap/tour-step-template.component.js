"use strict";
var tour_service_1 = require('../../tour.service');
var tour_step_template_service_1 = require('./tour-step-template.service');
var core_1 = require('@angular/core');
var TourStepTemplateComponent = (function () {
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
    }
    TourStepTemplateComponent.prototype.ngAfterViewInit = function () {
        this.tourStepTemplateService.template = this.tourStepTemplate;
    };
    TourStepTemplateComponent.decorators = [
        { type: core_1.Component, args: [{
                    encapsulation: core_1.ViewEncapsulation.None,
                    selector: 'tour-step-template',
                    // styleUrls: ['./tour-step-template.component.css'],
                    template: "\n    <template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB Prev</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">Next \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">End</button>\n      </div>\n    </template>\n  ",
                },] },
    ];
    /** @nocollapse */
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: tour_step_template_service_1.TourStepTemplateService, },
        { type: tour_service_1.TourService, },
    ]; };
    TourStepTemplateComponent.propDecorators = {
        'tourStepTemplate': [{ type: core_1.ViewChild, args: ['tourStep', { read: core_1.TemplateRef },] },],
    };
    return TourStepTemplateComponent;
}());
exports.TourStepTemplateComponent = TourStepTemplateComponent;
//# sourceMappingURL=tour-step-template.component.js.map