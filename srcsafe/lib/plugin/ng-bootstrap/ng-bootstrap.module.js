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
var tour_step_template_component_1 = require('./tour-step-template.component');
var tour_step_template_service_1 = require('./tour-step-template.service');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var core_1 = require('@angular/core');
var tour_module_1 = require('../../tour.module');
var tour_anchor_directive_1 = require('./tour-anchor.directive');
exports.TourAnchorNgBootstrapDirective = tour_anchor_directive_1.TourAnchorNgBootstrapDirective;
var common_1 = require('@angular/common');
var TourNgBootstrapModule = (function () {
    function TourNgBootstrapModule() {
    }
    TourNgBootstrapModule.forRoot = function () {
        return {
            ngModule: TourNgBootstrapModule,
            providers: [
                tour_step_template_service_1.TourStepTemplateService,
                tour_module_1.TourModule.forRoot().providers,
            ],
        };
    };
    TourNgBootstrapModule = __decorate([
        core_1.NgModule({
            declarations: [tour_anchor_directive_1.TourAnchorNgBootstrapDirective, tour_step_template_component_1.TourStepTemplateComponent],
            exports: [tour_anchor_directive_1.TourAnchorNgBootstrapDirective, tour_step_template_component_1.TourStepTemplateComponent],
            imports: [common_1.CommonModule, ng_bootstrap_1.NgbPopoverModule.forRoot()],
        }), 
        __metadata('design:paramtypes', [])
    ], TourNgBootstrapModule);
    return TourNgBootstrapModule;
}());
exports.TourNgBootstrapModule = TourNgBootstrapModule;
//# sourceMappingURL=ng-bootstrap.module.js.map