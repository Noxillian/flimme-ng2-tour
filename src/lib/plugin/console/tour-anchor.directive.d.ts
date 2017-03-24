import { TourAnchorDirective } from '../../tour-anchor.directive';
import { IStepOption, TourService } from '../../tour.service';
import { OnDestroy, OnInit } from '@angular/core';
export declare class TourAnchorConsoleDirective implements OnInit, OnDestroy, TourAnchorDirective {
    private tourService;
    tourAnchor: string;
    constructor(tourService: TourService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStepOption): void;
    hideTourStep(): void;
}
