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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Subject_1 = require('rxjs/Subject');
var merge_1 = require('rxjs/operator/merge');
var map_1 = require('rxjs/operator/map');
(function (TourState) {
    TourState[TourState["OFF"] = 0] = "OFF";
    TourState[TourState["ON"] = 1] = "ON";
    TourState[TourState["PAUSED"] = 2] = "PAUSED";
})(exports.TourState || (exports.TourState = {}));
var TourState = exports.TourState;
var TourService = (function () {
    function TourService(router) {
        this.router = router;
        this.stepShow$ = new Subject_1.Subject();
        this.stepHide$ = new Subject_1.Subject();
        this.initialize$ = new Subject_1.Subject();
        this.start$ = new Subject_1.Subject();
        this.end$ = new Subject_1.Subject();
        this.pause$ = new Subject_1.Subject();
        this.resume$ = new Subject_1.Subject();
        this.anchorRegister$ = new Subject_1.Subject();
        this.anchorUnregister$ = new Subject_1.Subject();
        this.events$ = merge_1.mergeStatic(map_1.map.bind(this.stepShow$)(function (value) { return ({ name: 'stepShow', value: value }); }), map_1.map.bind(this.stepHide$)(function (value) { return ({ name: 'stepHide', value: value }); }), map_1.map.bind(this.initialize$)(function (value) { return ({ name: 'initialize', value: value }); }), map_1.map.bind(this.start$)(function (value) { return ({ name: 'start', value: value }); }), map_1.map.bind(this.end$)(function (value) { return ({ name: 'end', value: value }); }), map_1.map.bind(this.pause$)(function (value) { return ({ name: 'pause', value: value }); }), map_1.map.bind(this.resume$)(function (value) { return ({ name: 'resume', value: value }); }), map_1.map.bind(this.anchorRegister$)(function (value) { return ({ name: 'anchorRegister', value: value }); }), map_1.map.bind(this.anchorUnregister$)(function (value) { return ({ name: 'anchorUnregister', value: value }); }));
        this.anchors = {};
        this.status = TourState.OFF;
    }
    TourService.prototype.initialize = function (steps, stepDefaults) {
        if (steps && steps.length > 0) {
            this.steps = steps.map(function (step) { return Object.assign({}, stepDefaults, step); });
            this.initialize$.next(steps);
            this.status = TourState.OFF;
        }
    };
    TourService.prototype.start = function () {
        this.startAt(0);
    };
    TourService.prototype.startAt = function (stepId) {
        this.goToStep(this.loadStep(stepId));
        this.start$.next();
        this.status = TourState.ON;
    };
    TourService.prototype.end = function () {
        this.hideStep(this.currentStep);
        this.currentStep = undefined;
        this.end$.next();
        this.status = TourState.OFF;
    };
    TourService.prototype.pause = function () {
        this.hideStep(this.currentStep);
        this.pause$.next();
        this.status = TourState.PAUSED;
    };
    TourService.prototype.resume = function () {
        this.showStep(this.currentStep);
        this.resume$.next();
        this.status = TourState.ON;
    };
    TourService.prototype.toggle = function (pause) {
        if (pause) {
            if (this.currentStep) {
                this.pause();
            }
            else {
                this.resume();
            }
        }
        else {
            if (this.currentStep) {
                this.end();
            }
            else {
                this.start();
            }
        }
    };
    TourService.prototype.next = function () {
        this.goToStep(this.loadStep(this.currentStep.nextStep || this.steps.indexOf(this.currentStep) + 1));
    };
    TourService.prototype.hasNext = function (step) {
        return step.nextStep !== undefined || this.steps.indexOf(step) < this.steps.length - 1;
    };
    TourService.prototype.prev = function () {
        this.goToStep(this.loadStep(this.currentStep.prevStep || this.steps.indexOf(this.currentStep) - 1));
    };
    TourService.prototype.hasPrev = function (step) {
        return step.prevStep !== undefined || this.steps.indexOf(step) > 0;
    };
    TourService.prototype.goto = function (stepId) {
        this.goToStep(this.loadStep(stepId));
    };
    TourService.prototype.register = function (anchorId, anchor) {
        if (this.anchors[anchorId]) {
            throw 'anchorId ' + anchorId + ' already registered!';
        }
        this.anchors[anchorId] = anchor;
        this.anchorRegister$.next(anchorId);
    };
    TourService.prototype.unregister = function (anchorId) {
        delete this.anchors[anchorId];
        this.anchorUnregister$.next(anchorId);
    };
    TourService.prototype.goToStep = function (step) {
        var _this = this;
        if (!step) {
            this.end();
            return;
        }
        var navigatePromise = new Promise(function (resolve) { return resolve(true); });
        if (step.route !== undefined && typeof (step.route) === 'string') {
            navigatePromise = this.router.navigateByUrl(step.route);
        }
        else if (step.route && Array.isArray(step.route)) {
            navigatePromise = this.router.navigate(step.route);
        }
        navigatePromise.then(function (navigated) {
            if (navigated !== false) {
                _this.setCurrentStep(step);
            }
        });
    };
    TourService.prototype.loadStep = function (stepId) {
        if (typeof (stepId) === 'number') {
            return this.steps[stepId];
        }
        else {
            return this.steps.find(function (step) { return step.stepId === stepId; });
        }
    };
    TourService.prototype.setCurrentStep = function (step) {
        if (this.currentStep) {
            this.hideStep(this.currentStep);
        }
        this.currentStep = step;
        this.showStep(this.currentStep);
    };
    TourService.prototype.showStep = function (step) {
        var anchor = this.anchors[step.anchorId];
        if (!anchor) {
            this.end();
            return;
        }
        anchor.showTourStep(step);
        this.stepShow$.next(step);
    };
    TourService.prototype.hideStep = function (step) {
        var anchor = this.anchors[step.anchorId];
        if (!anchor) {
            return;
        }
        anchor.hideTourStep();
        this.stepHide$.next(step);
    };
    TourService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TourService);
    return TourService;
}());
exports.TourService = TourService;
//# sourceMappingURL=tour.service.js.map