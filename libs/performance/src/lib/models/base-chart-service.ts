import { Portfolio } from '@ng-finance/core';

/**
 * T must be EChartOption or SpectrumOption
 */
export abstract class BaseChartService<T> {
  public abstract performanceBase100(portfolios: Portfolio[]): T;
  public abstract dailyReturnDistribution(portfolios: Portfolio[]): T;
  public abstract beta(portfolios: Portfolio[]): T;
}
