import { TourStepTemplateService } from './tour-step-template.service';
import { TourAnchorDirective } from '../../tour-anchor.directive';
import { IStepOption, TourService } from '../../tour.service';
import { ComponentFactoryResolver, ElementRef, Injector, NgZone, OnInit, OnDestroy, Renderer, ViewContainerRef } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
export declare class TourAnchorNgBootstrapDirective extends NgbPopover implements OnInit, OnDestroy, TourAnchorDirective {
    private tourService;
    private tourStepTemplate;
    tourAnchor: string;
    private element;
    private oldstyle;
    private mask_top;
    private mask_bottom;
    private mask_left;
    private mask_right;
    private hasMask;
    constructor(tourService: TourService, tourStepTemplate: TourStepTemplateService, _elementRef: ElementRef, _renderer: Renderer, injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, config: NgbPopoverConfig, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStepOption): void;
    hideTourStep(): void;
    private create_arrow(direction);
    private destroy_masks();
    private create_masks();
}
