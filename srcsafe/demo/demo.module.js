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
var ng_bootstrap_module_1 = require('./../lib/plugin/ng-bootstrap/ng-bootstrap.module');
var other_route_component_1 = require('./other-route.component');
var router_1 = require('@angular/router');
var docs_component_1 = require('./docs.component');
var demo_component_1 = require('./demo.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            bootstrap: [demo_component_1.DemoComponent],
            declarations: [demo_component_1.DemoComponent, docs_component_1.DocsComponent, other_route_component_1.OtherRouteComponent],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([{
                        component: docs_component_1.DocsComponent,
                        path: '',
                        pathMatch: 'full',
                    }, {
                        component: other_route_component_1.OtherRouteComponent,
                        path: 'other',
                    }]),
                ng_bootstrap_module_1.TourNgBootstrapModule.forRoot(),
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map