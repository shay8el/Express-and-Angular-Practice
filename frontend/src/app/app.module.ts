import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ChartsModule} from 'ng2-charts';
import {WebTypeDashboardComponent} from './components/web-type-dashboard/web-type-dashboard.component';
import {RiskMeterComponent} from './components/risk-meter/risk-meter.component';
import {WebTypesBlockComponent} from './components/web-types-block/web-types-block.component';
import {SeveritiesBlockComponent} from './components/severities-block/severities-block.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SourcesBlockComponent} from './components/sources-block/sources-block.component';
import {BrowserModule} from '@angular/platform-browser';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    WebTypesBlockComponent,
    WebTypeDashboardComponent,
    SeveritiesBlockComponent,
    SourcesBlockComponent,
    RiskMeterComponent,
    LoadingSpinnerComponent
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
