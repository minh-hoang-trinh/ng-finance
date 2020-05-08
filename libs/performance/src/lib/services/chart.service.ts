import { Inject, Injectable } from '@angular/core';
import { PerformanceEChartService } from './performance-echart.service';
import { BaseChartService } from '../models/base-chart-service';
import { SPECTRUM_CHART_TYPE_PROVIDERS, SpectrumOption } from '@terces/spectrum';
import { Portfolio } from '@ng-finance/core';
import { EChartOption } from 'echarts';

@Injectable()
export class ChartService extends BaseChartService<EChartOption | SpectrumOption> {
  private _spectrumService: BaseChartService<EChartOption | SpectrumOption>;

  constructor(
    @Inject(SPECTRUM_CHART_TYPE_PROVIDERS) readonly chartType: 'd3' | 'echarts',
    readonly _performanceEChartService: PerformanceEChartService
  ) {
    super();
    if (chartType === 'echarts') {
      this._spectrumService = _performanceEChartService;
      return;
    }

    throw new Error('Unsupported chart type!');
  }

  dailyReturnDistribution(portfolios: Portfolio[]): EChartOption | SpectrumOption {
    return this._spectrumService.dailyReturnDistribution(portfolios);
  }

  performanceBase100(portfolios: Portfolio[]): EChartOption | SpectrumOption {
    return this._spectrumService.performanceBase100(portfolios);
  }

  beta(portfolios: Portfolio[]): EChartOption | SpectrumOption {
    return this._spectrumService.beta(portfolios);
  }
}
