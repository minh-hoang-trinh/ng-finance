import { ElementRef } from '@angular/core';
import { SpectrumOption } from './spectrum-option';
import { EChartOption } from 'echarts';

export abstract class ChartService {
  public abstract createChart(el: ElementRef): Object;

  public abstract setOption(instance: Object, option: SpectrumOption | EChartOption): void;
}
