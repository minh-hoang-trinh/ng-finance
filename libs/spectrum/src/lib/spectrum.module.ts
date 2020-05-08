import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { SpectrumService } from './services/spectrum.service';
import { SPECTRUM_CHART_TYPE_PROVIDERS } from './providers/spectrum-chart-type-provider';
import { EChartsService } from './services/echarts/echarts.service';
import { D3Service } from './services/d3/d3.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ChartComponent],
  exports: [ChartComponent],
  providers: [
    SpectrumService,
    EChartsService,
    D3Service,
    {
      provide: SPECTRUM_CHART_TYPE_PROVIDERS,
      useValue: 'd3'
    }
  ]
})
export class SpectrumModule {}
