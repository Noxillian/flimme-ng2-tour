import { TourAnchorDirective } from './tour-anchor.directive';
import { Router, UrlSegment } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
export interface IStepOption {
    stepId?: string;
    anchorId?: string;
    title?: string;
    content?: string;
    route?: string | UrlSegment[];
    nextStep?: number | string;
    prevStep?: number | string;
    placement?: 'above' | 'below' | 'after' | 'before' | 'left' | 'right';
    preventScrolling?: boolean;
    display?: 'highlight' | 'mask' | 'underline';
    arrow?: 'top' | 'left' | 'right' | 'bottom';
}
export declare enum TourState {
    OFF = 0,
    ON = 1,
    PAUSED = 2,
}
export declare class TourService {
    private router;
    stepShow$: Subject<IStepOption>;
    stepHide$: Subject<IStepOption>;
    initialize$: Subject<IStepOption[]>;
    start$: Subject<IStepOption>;
    end$: Subject<any>;
    pause$: Subject<IStepOption>;
    resume$: Subject<IStepOption>;
    anchorRegister$: Subject<string>;
    anchorUnregister$: Subject<string>;
    events$: Observable<{
        name: string;
        value: any;
    }>;
    steps: IStepOption[];
    currentStep: IStepOption;
    anchors: {
        [anchorId: string]: TourAnchorDirective;
    };
    private status;
    constructor(router: Router);
    initialize(steps: IStepOption[], stepDefaults?: IStepOption): void;
    start(): void;
    startAt(stepId: number | string): void;
    end(): void;
    pause(): void;
    resume(): void;
    toggle(pause?: boolean): void;
    next(): void;
    hasNext(step: IStepOption): boolean;
    prev(): void;
    hasPrev(step: IStepOption): boolean;
    goto(stepId: number | string): void;
    register(anchorId: string, anchor: TourAnchorDirective): void;
    unregister(anchorId: string): void;
    /**
     * Configures hot keys for controlling the tour with the keyboard
     */
    private goToStep(step);
    private loadStep(stepId);
    private setCurrentStep(step);
    private showStep(step);
    private hideStep(step);
}
