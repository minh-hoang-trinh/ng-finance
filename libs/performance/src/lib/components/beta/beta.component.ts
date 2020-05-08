import { Component, Input, OnInit } from '@angular/core';
import { SpectrumOption } from '@terces/spectrum';
import { Portfolio } from '@ng-finance/core';
import { ChartService } from '../../services/chart.service';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ng-finance-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  public chartOption: SpectrumOption | EChartOption;

  constructor(private spectrumService: ChartService) {
  }

  @Input()
  public set portfolios(_portfolios: Portfolio[]) {
    this.chartOption = this.spectrumService.beta(_portfolios);
  }

  ngOnInit(): void {
  }
}
