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
    __decorate([
        core_1.ViewChild('tourStep', { read: core_1.TemplateRef }), 
        __metadata('design:type', core_1.TemplateRef)
    ], TourStepTemplateComponent.prototype, "tourStepTemplate", void 0);
    TourStepTemplateComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'tour-step-template',
            template: "\n    <template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB Prev</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">Next \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">End</button>\n      </div>\n    </template>\n  ",
        }), 
        __metadata('design:paramtypes', [tour_step_template_service_1.TourStepTemplateService, tour_service_1.TourService])
    ], TourStepTemplateComponent);
    return TourStepTemplateComponent;
}());
exports.TourStepTemplateComponent = TourStepTemplateComponent;
//# sourceMappingURL=tour-step-template.component.js.map