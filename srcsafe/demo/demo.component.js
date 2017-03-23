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
var tour_service_1 = require('./../lib/tour.service');
var core_1 = require('@angular/core');
var DemoComponent = (function () {
    function DemoComponent(tourService) {
        this.tourService = tourService;
        this.tourService.initialize([{
                anchorId: 'start.tour',
                content: 'Welcome to the Ng2-Tour tour!',
                placement: 'below',
                title: 'Step 1: Welcome',
            }, {
                anchorId: 'angular-ui-tour',
                content: 'This also could be a longer text, which could describe in a detailed way the functions of certain elements in your application or whatsoever.',
                route: '',
                title: 'Step 2: TheSecond with Highlight',
                display: 'highlight',
            }, {
                anchorId: 'installation',
                content: 'First, install the library...',
                title: 'Step 3: TheThird with Mask',
                display: 'mask',
            }, {
                anchorId: 'usage',
                content: '...then use it.',
                title: 'Step 4: TheFourth with underline',
                display: 'highlight',
            }, {
                anchorId: 'tourService.start',
                content: 'Don\'t forget to actual start the tour.',
                title: 'Start the tour',
            }, {
                anchorId: 'config.anchorId',
                content: 'Every step needs an anchor.',
                title: 'Anchor',
                display: 'highlight',
            }, {
                anchorId: 'config.route',
                content: 'Tours can span multiple routes.',
                route: '',
                title: 'Route',
                display: 'highlight',
            }, {
                anchorId: 'another.route',
                content: 'Like this!',
                route: 'other',
                title: 'Another Route',
                display: 'highlight',
            }, {
                anchorId: 'config.route',
                content: 'And then back again.',
                placement: 'below',
                route: '',
                title: 'Route Return',
                display: 'highlight',
            }, {
                anchorId: 'config.placement.default',
                content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Sliiide to the left.',
                placement: 'left',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Sliiide to the right.',
                placement: 'right',
                title: 'Placement',
            }, {
                anchorId: 'config.placement.default',
                content: 'Take it back now y\'all.  One hop this time.',
                placement: 'below',
                title: 'Placement',
            }, {
                anchorId: 'hotkeys',
                content: 'Try using the hotkeys to navigate through the tour.',
                title: 'Hotkeys',
            }, {
                anchorId: 'events',
                content: 'You can subscribe to events',
                title: 'Events',
                display: 'highlight',
            }]);
        this.tourService.start();
    }
    DemoComponent = __decorate([
        core_1.Component({
            selector: 'tour-demo',
            templateUrl: './demo.component.html',
        }), 
        __metadata('design:paramtypes', [tour_service_1.TourService])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map