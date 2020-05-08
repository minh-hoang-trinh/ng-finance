import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '@ng-finance/core';
import { SpectrumOption } from '@terces/spectrum';
import { ChartService } from '../../services/chart.service';
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'ng-finance-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceChartComponent implements OnInit {
  public chartOption: SpectrumOption | EChartOption;

  constructor(private readonly performanceChartService: ChartService) {
  }

  @Input()
  public set portfolios(portfolios: Portfolio[]) {
    this.chartOption = this.performanceChartService.performanceBase100(portfolios);
  }

  ngOnInit(): void {
  }
}
