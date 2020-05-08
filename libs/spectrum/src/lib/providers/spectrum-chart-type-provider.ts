import { InjectionToken } from '@angular/core';
import { SpectrumChartType } from '../models/spectrum-chart-type';

/**
 * Spectrum chart type
 *
 * Accepted values: d3 | echarts
 */
export const SPECTRUM_CHART_TYPE_PROVIDERS = new InjectionToken<SpectrumChartType>('SpectrumChartType');
