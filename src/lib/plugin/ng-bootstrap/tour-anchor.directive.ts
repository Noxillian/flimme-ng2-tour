import { TourStepTemplateService } from './tour-step-template.service';
import { TourAnchorDirective } from '../../tour-anchor.directive';      //Nachfragen warum selbst import
import { IStepOption, TourService } from '../../tour.service';
import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Injector,
  Input,
  NgZone,
  OnInit,
  OnDestroy,
  Renderer,
  ViewContainerRef,
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
// const scrollIntoViewIfNeeded = require('scroll-into-view-if-needed');

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgBootstrapDirective extends NgbPopover implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;
  private oldstyle: any;
  private mask_top: any;
  private mask_bottom: any;
  private mask_left: any;
  private mask_right: any;

  constructor(
    private tourService: TourService, private tourStepTemplate: TourStepTemplateService, _elementRef: ElementRef, _renderer: Renderer,
    injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, config: NgbPopoverConfig,
    ngZone: NgZone,
  ) {
    super(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone);
    this.element = _elementRef;
    this.oldstyle = this.element.nativeElement.style;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    this.ngbPopover = this.tourStepTemplate.template;
    this.popoverTitle = step.title;

    /**
     * placement switch
     */

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
    this.open({ step });
    if (!step.preventScrolling) {
      scrollIntoViewIfNeeded(this.element.nativeElement, true);
    }

    /**
     * display switch
     */

    switch (step.display) {
      case 'highlight':
        this.element.nativeElement.style.boxShadow = "2px 2px 10px 10px pink";
        break;
      case 'mask':
        this.create_masks();
        break;
      case 'underline':
        this.element.nativeElement.style.textDecoration = "underline";
        break;
    }

    /**
     *  arrow
     */
    this.create_arrow(step.arrow);

  }

  public hideTourStep(): void {
    this.destroy_masks()
    this.element.nativeElement.style = this.oldstyle;
    this.close();
  }

  private create_arrow(direction: String): void{

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
  }

  private destroy_masks(): void {
    if (this.mask_top != null){
      document.body.removeChild(this.mask_top);
    }
    if (this.mask_bottom != null){
      document.body.removeChild(this.mask_bottom);
    }
    if (this.mask_left != null){
      document.body.removeChild(this.mask_left);
    }
    if (this.mask_right != null){
      document.body.removeChild(this.mask_right);
    }
  }

  private create_masks(): void {
    const rect = this.element.nativeElement.getBoundingClientRect();

    this.mask_top = document.createElement("div");
    this.mask_top.style.width = "100vw";
    this.mask_top.style.height = rect.top + "px";
    this.mask_top.style.top = "0";
    this.mask_top.style.left = "0";
    this.mask_top.style.background = "rgba(0,0,0,0.75)";
    this.mask_top.style.position = "absolute";

    this.mask_bottom = document.createElement("div");
    this.mask_bottom.style.width = "100vw";
    this.mask_bottom.style.height = "100vh";
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

    /**
     * Add masks to document
     */
    document.body.appendChild(this.mask_top);
    document.body.appendChild(this.mask_bottom);
    document.body.appendChild(this.mask_left);
    document.body.appendChild(this.mask_right);
  }

}

