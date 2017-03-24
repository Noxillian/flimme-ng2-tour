"use strict";
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
    TourNgBootstrapModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [tour_anchor_directive_1.TourAnchorNgBootstrapDirective, tour_step_template_component_1.TourStepTemplateComponent],
                    exports: [tour_anchor_directive_1.TourAnchorNgBootstrapDirective, tour_step_template_component_1.TourStepTemplateComponent],
                    imports: [common_1.CommonModule, ng_bootstrap_1.NgbPopoverModule.forRoot()],
                },] },
    ];
    /** @nocollapse */
    TourNgBootstrapModule.ctorParameters = function () { return []; };
    return TourNgBootstrapModule;
}());
exports.TourNgBootstrapModule = TourNgBootstrapModule;
//# sourceMappingURL=ng-bootstrap.module.js.map