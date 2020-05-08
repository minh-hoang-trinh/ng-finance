import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SpectrumService } from '../../services/spectrum.service';
import { SpectrumOption } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'spectrum-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @ViewChild('chart', { static: true }) public chart;
  @Input() public option: SpectrumOption;

  private _instance: Object;

  constructor(private readonly spectrumService: SpectrumService) {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes.option) {
      return;
    }

    if (!this._instance) {
      this._instance = this.spectrumService.createChart(this.chart);
    }

    this.spectrumService.setOption(this._instance, this.option);
  }
}
