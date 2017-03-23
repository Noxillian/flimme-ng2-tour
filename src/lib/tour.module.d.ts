import { TourConsoleModule } from './plugin/console/console.module';
import { TourService } from './tour.service';
import { ModuleWithProviders } from '@angular/core';
export declare class TourModule {
    static forRoot(): ModuleWithProviders;
}
export { TourConsoleModule, TourService };
