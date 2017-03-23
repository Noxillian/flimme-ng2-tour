"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tour_step_template_service_1 = require('./tour-step-template.service');
var tour_service_1 = require('../../tour.service');
var core_1 = require('@angular/core');
var popover_1 = require('@ng-bootstrap/ng-bootstrap/popover/popover');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var scroll_into_view_if_needed_1 = require('scroll-into-view-if-needed');
// const scrollIntoViewIfNeeded = require('scroll-into-view-if-needed');
var TourAnchorNgBootstrapDirective = (function (_super) {
    __extends(TourAnchorNgBootstrapDirective, _super);
    function TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, _elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        _super.call(this, _elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone);
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.hasMask = false;
        this.element = _elementRef;
        this.oldstyle = this.element.nativeElement.style;
        /** This seems to fix the width resizing bug */
        window.onresize = function () {
            ngZone.run(function () {
                console.log("mask: ", _this.mask_top);
                if (_this.hasMask === true) {
                    _this.destroy_masks();
                    _this.create_masks();
                }
                else {
                    console.log("there is no mask ...");
                }
            });
        };
    }
    TourAnchorNgBootstrapDirective.prototype.ngOnInit = function () {
        this.tourService.register(this.tourAnchor, this);
    };
    TourAnchorNgBootstrapDirective.prototype.ngOnDestroy = function () {
        // if (this.hasMask){
        //   this.destroy_masks();
        // }
        this.tourService.unregister(this.tourAnchor);
    };
    TourAnchorNgBootstrapDirective.prototype.showTourStep = function (step) {
        this.ngbPopover = this.tourStepTemplate.template;
        this.popoverTitle = step.title;
        /** placement switch */
        switch (step.placement) {
            case 'above':
                this.placement = 'top';
                break;
            case 'below':
                this.placement = 'bottom';
                break;
            case 'right':
            case 'after':
                this.placement = 'right';
                break;
            case 'left':
            case 'before':
                this.placement = 'left';
                break;
            default:
                this.placement = 'top';
        }
        this.open({ step: step });
        if (!step.preventScrolling) {
            scroll_into_view_if_needed_1.default(this.element.nativeElement, true);
        }
        /** display switch */
        switch (step.display) {
            case 'highlight':
                this.element.nativeElement.style.boxShadow = "2px 2px 10px 10px rgba(255, 56, 93, 0.5)";
                break;
            case 'mask':
                this.create_masks();
                this.hasMask = true;
                break;
            case 'underline':
                this.element.nativeElement.style.textDecoration = "underline";
                break;
        }
        /** arrow */
        this.create_arrow(step.arrow);
    };
    TourAnchorNgBootstrapDirective.prototype.hideTourStep = function () {
        this.destroy_masks();
        this.element.nativeElement.style = this.oldstyle;
        this.close();
    };
    TourAnchorNgBootstrapDirective.prototype.create_arrow = function (direction) {
        switch (direction) {
            case 'top':
                break;
            case 'left':
                break;
            case 'right':
                break;
            case 'bottom':
                break;
            default:
                console.log("no arrow");
                break;
        }
    };
    TourAnchorNgBootstrapDirective.prototype.destroy_masks = function () {
        if (this.mask_top != null) {
            document.body.removeChild(this.mask_top);
        }
        if (this.mask_bottom != null) {
            document.body.removeChild(this.mask_bottom);
        }
        if (this.mask_left != null) {
            document.body.removeChild(this.mask_left);
        }
        if (this.mask_right != null) {
            document.body.removeChild(this.mask_right);
        }
    };
    TourAnchorNgBootstrapDirective.prototype.create_masks = function () {
        var rect = this.element.nativeElement.getBoundingClientRect();
        this.mask_top = document.createElement("div");
        this.mask_top.style.width = "100vw";
        this.mask_top.style.height = rect.top + "px";
        this.mask_top.style.top = "0";
        this.mask_top.style.left = "0";
        this.mask_top.style.background = "rgba(0,0,0,0.75)";
        this.mask_top.style.position = "absolute";
        var body = document.body, html = document.documentElement;
        var bottomheight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        this.mask_bottom = document.createElement("div");
        this.mask_bottom.style.width = "100vw";
        this.mask_bottom.style.height = bottomheight + "px"; //"100vh";
        this.mask_bottom.style.top = rect.bottom + "px";
        this.mask_bottom.style.left = "0";
        this.mask_bottom.style.background = "rgba(0,0,0,0.75)";
        this.mask_bottom.style.position = "absolute";
        this.mask_left = document.createElement("div");
        this.mask_left.style.width = rect.left + "px";
        this.mask_left.style.height = (rect.bottom - rect.top) + "px";
        this.mask_left.style.top = rect.top + "px";
        this.mask_left.style.left = "0";
        this.mask_left.style.background = "rgba(0,0,0,0.75)";
        this.mask_left.style.position = "absolute";
        this.mask_right = document.createElement("div");
        this.mask_right.style.width = "100vw";
        this.mask_right.style.height = (rect.bottom - rect.top) + "px";
        this.mask_right.style.top = rect.top + "px";
        this.mask_right.style.left = rect.right + "px";
        this.mask_right.style.background = "rgba(0,0,0,0.75)";
        this.mask_right.style.position = "absolute";
        /** Add masks to document */
        document.body.appendChild(this.mask_top);
        document.body.appendChild(this.mask_bottom);
        document.body.appendChild(this.mask_left);
        document.body.appendChild(this.mask_right);
    };
    TourAnchorNgBootstrapDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[tourAnchor]',
                },] },
    ];
    /** @nocollapse */
    TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
        { type: tour_service_1.TourService, },
        { type: tour_step_template_service_1.TourStepTemplateService, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.Injector, },
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ViewContainerRef, },
        { type: ng_bootstrap_1.NgbPopoverConfig, },
        { type: core_1.NgZone, },
    ]; };
    TourAnchorNgBootstrapDirective.propDecorators = {
        'tourAnchor': [{ type: core_1.Input },],
    };
    return TourAnchorNgBootstrapDirective;
}(popover_1.NgbPopover));
exports.TourAnchorNgBootstrapDirective = TourAnchorNgBootstrapDirective;
//# sourceMappingURL=tour-anchor.directive.js.map