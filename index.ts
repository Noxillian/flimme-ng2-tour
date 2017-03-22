// export { TourNgBootstrapModule } from './src/lib/plugin/ng-bootstrap/ng-bootstrap.module';
// export { TourModule, TourService, TourConsoleModule } from './src/lib/tour.module';

import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { TourNgBootstrapModule } from './src/lib/plugin/ng-bootstrap/ng-bootstrap.module';
import { TourModule, TourService, TourConsoleModule } from './src/lib/tour.module';

@NgModule({
    exports: [
        TourNgBootstrapModule,
        TourModule,
        TourService,
        TourConsoleModule
    ],
    imports:      [
        BrowserModule
    ]
})
export class tour_AppModule { }