import { ElementRef, Inject, Injectable } from '@angular/core';
import { EChartsService } from './echarts/echarts.service';
import { D3Service } from './d3/d3.service';
import { SPECTRUM_CHART_TYPE_PROVIDERS } from '../providers/spectrum-chart-type-provider';
import { SpectrumChartType } from '../models/spectrum-chart-type';
import { ChartService } from '../models/chart-service';
import { SpectrumOption } from '../models';
import { EChartOption, ECharts } from 'echarts';

@Injectable()
export class SpectrumService {
  private readonly _chartService: ChartService;

  constructor(
    @Inject(SPECTRUM_CHART_TYPE_PROVIDERS) private readonly chartType: SpectrumChartType,
    private readonly echartsService: EChartsService,
    private readonly d3Service: D3Service
  ) {
    if (this.chartType === 'echarts') {
      this._chartService = echartsService;

      return;
    }
    if (this.chartType === 'd3') {
      this._chartService = d3Service;

      return;
    }

    throw new Error('Unknown Spectrum chart type!');
  }

  public createChart(el: ElementRef): Object | ECharts {
    return this._chartService.createChart(el);
  }

  public setOption(instance: Object, option: SpectrumOption | EChartOption): void {
    this._chartService.setOption(instance, option);
  }
}
