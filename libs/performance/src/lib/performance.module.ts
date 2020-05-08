import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, PercentPipe } from '@angular/common';
import { PerformanceChartComponent } from './components/performance-chart/performance-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoreModule } from '@ng-finance/core';
import { ReturnsDistributionComponent } from './components/returns-distribution/returns-distribution.component';
import { SPECTRUM_CHART_TYPE_PROVIDERS, SpectrumModule } from '@terces/spectrum';
import { BetaComponent } from './components/beta/beta.component';
import { PerformanceEChartService } from './services/performance-echart.service';
import { ChartService } from './services/chart.service';

const ALL_COMPONENTS = [PerformanceChartComponent, ReturnsDistributionComponent, BetaComponent];

@NgModule({
  imports: [CommonModule, NgxChartsModule, CoreModule, SpectrumModule],
  exports: ALL_COMPONENTS,
  declarations: ALL_COMPONENTS,
  providers: [
    ChartService,
    PerformanceEChartService,
    DatePipe,
    PercentPipe,
    {
      provide: SPECTRUM_CHART_TYPE_PROVIDERS,
      useValue: 'echarts'
    }
  ]
})
export class PerformanceModule {
}
