import { Injectable } from '@angular/core';
import { EChartOption } from 'echarts';
import { BaseChartService } from '../models/base-chart-service';
import { Portfolio } from '@ng-finance/core';
import { DatePipe, PercentPipe } from '@angular/common';
import { computeReturns } from '@terces/gluon';
import { linearRegression } from '../../../../gluon/src/lib/engines/regression';

@Injectable({
  providedIn: 'root'
})
export class PerformanceEChartService extends BaseChartService<EChartOption> {
  constructor(private readonly percentPipe: PercentPipe, private readonly datePipe: DatePipe) {
    super();
  }

  public performanceBase100(portfolios: Portfolio[]): EChartOption {
    return {
      yAxis: [
        {
          type: 'value'
        }
      ],
      xAxis: [
        {
          type: 'category',
          data: portfolios[0]?.prices.map(({ date }) => this.datePipe.transform(date, 'dd MM yyyy'))
        }
      ],
      series: portfolios?.map(({ name, prices }) => ({
        name: name,
        type: 'line',
        data: prices.map(({ date, value }) => (value / prices[0].value) * 100)
      }))
    };
  }

  public dailyReturnDistribution(portfolios: Portfolio[]): echarts.EChartOption {
    const returnsDistribution = portfolios?.map(portfolio =>
      this.createDailyReturnsDistribution(computeReturns(portfolio.prices).map(p => p.value))
    );
    return {
      yAxis: [
        {
          type: 'value'
        }
      ],
      xAxis: [
        {
          type: 'category',
          data: returnsDistribution[0]?.map(({ category }) => category)
        }
      ],
      series: returnsDistribution?.map((values, index) => ({
        name: portfolios[index].name,
        type: 'bar',
        data: values.map(v => ({
          name: v.category,
          value: v.value
        }))
      }))
    };
  }

  public beta(portfolios: Portfolio[]): EChartOption {
    if (portfolios.length !== 2) {
      return;
    }

    const returns = portfolios.map(p => computeReturns(p.prices));

    return {
      tooltip: {
        trigger: 'item'
      },
      yAxis: [
        {
          type: 'value'
        }
      ],
      xAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Beta',
          type: 'scatter',
          data: returns[0].map(({ date }, index) => ({
            value: returns.map(r => r[index].value)
          }))
        }
      ]
    };
  }

  private readonly createDailyReturnsDistribution: (
    returns: number[]
  ) => { category: string; value: number }[] = returns => {
    const bucket: number[] = [-0.05, -0.04, -0.03, -0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05];

    const returnLength = returns.length;
    const data = bucket.map((r, index, returnsBuckets) =>
      index === 0
        ? returns.filter(rB => rB <= r).length / returnLength
        : returns.filter(rB => rB > returnsBuckets[index - 1] && rB <= returnsBuckets[index]).length / returnLength
    );

    data.push(returns.filter(rB => rB > bucket[bucket.length - 1]).length / returnLength);

    return data.map((value, index) => ({
      category: index === bucket.length ? '+inf' : `${(bucket[index] * 100).toFixed(1)}%`,
      value
    }));
  };
}
