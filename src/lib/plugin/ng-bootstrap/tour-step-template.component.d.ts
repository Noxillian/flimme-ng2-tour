import { TourService } from '../../tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { TemplateRef, AfterViewInit } from '@angular/core';
export declare class TourStepTemplateComponent implements AfterViewInit {
    private tourStepTemplateService;
    tourService: TourService;
    tourStepTemplate: TemplateRef<any>;
    constructor(tourStepTemplateService: TourStepTemplateService, tourService: TourService);
    ngAfterViewInit(): void;
}
