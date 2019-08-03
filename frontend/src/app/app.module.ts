import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WebTypesBlockComponent } from './web-types-block/web-types-block.component';
import { WebTypeDashboardComponent } from './web-type-dashboard/web-type-dashboard.component';
import { SeveritiesBlockComponent } from './severities-block/severities-block.component';
import { SourcesBlockComponent } from './sources-block/sources-block.component';
import { RiskMeterComponent } from './risk-meter/risk-meter.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    WebTypesBlockComponent,
    WebTypeDashboardComponent,
    SeveritiesBlockComponent,
    SourcesBlockComponent,
    RiskMeterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
