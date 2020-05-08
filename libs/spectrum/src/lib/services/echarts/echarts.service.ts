import { ElementRef, Injectable } from '@angular/core';
import { ChartService } from '../../models/chart-service';
import { EChartOption, ECharts, init } from 'echarts';
import { EChartsConfiguration } from '../../models/echarts/configuration';
import { merge } from 'lodash';

@Injectable()
export class EChartsService extends ChartService {
  constructor() {
    super();
  }

  public createChart(el: ElementRef): ECharts {
    return init(el.nativeElement);
  }

  public setOption(instance: ECharts, option: EChartOption): void {
    instance.setOption(merge(EChartsConfiguration.default, option));
  }
}
