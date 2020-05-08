import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SpectrumOption } from '@terces/spectrum';
import { Portfolio } from '@ng-finance/core';
import { EChartOption } from 'echarts';
import { PerformanceEChartService } from '../../services/performance-echart.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-finance-returns-distribution',
  templateUrl: './returns-distribution.component.html',
  styleUrls: ['./returns-distribution.component.css']
})
export class ReturnsDistributionComponent {
  public chartOption: SpectrumOption | EChartOption;

  constructor(private readonly chart: PerformanceEChartService) {}

  @Input()
  public set portfolios(portfolios: Portfolio[]) {
    this.chartOption = this.chart.dailyReturnDistribution(portfolios);
  }
}
