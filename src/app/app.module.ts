import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';

import { AppComponent } from './app.component';

export function highchartsModules() {
  return [more];
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
