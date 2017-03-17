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
     * Element Changing test
     */

    //console.log("test: " + this.element.nativeElement.style.backgroundColor);
    this.element.nativeElement.style.boxShadow = "2px 2px 10px 10px pink";
    // box-shadow: 0px 0px 5px gray;
    // document.getElementById("body").style.backgroundColor = 'black';
    // document.body.style.backgroundColor = 'black';
    // let test = this.element.nativeElement.style;


    // var div = document.createElement("div");
    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.background = "red";
    // div.style.color = "white";
    // div.innerHTML = "Hello";
    //
    // document.getElementById("main").appendChild(div);

    // console.log("t01_step: ", step);
    // console.log("t01_anchor: " + this.tourAnchor);
    // console.log("t02_nativeElement: ", this.element.nativeElement);
    // let elem: HTMLElement = document.getElementById("test");
    // if (elem === null){
    //   console.log("t01_message: no element?");
    // }else{
    //   console.log("t01_innerHtml: ", elem.innerHTML);
    //   console.log("t01_classname: " + elem.className);
    // }

  }

  public hideTourStep(): void {
    this.element.nativeElement.style = this.oldstyle;
    this.close();
  }
}
