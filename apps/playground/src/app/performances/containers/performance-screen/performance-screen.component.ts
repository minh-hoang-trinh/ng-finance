import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { DATA_PROVIDERS, DataProviderService } from '@ng-finance/data-provider';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Portfolio } from '@ng-finance/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-finance-performance-screen',
  templateUrl: './performance-screen.component.html',
  styleUrls: ['./performance-screen.component.css']
})
export class PerformanceScreenComponent implements OnInit {
  public portfolios$: Observable<Portfolio[]>;

  constructor(
    @Inject(DATA_PROVIDERS) private readonly dataProvider: DataProviderService
  ) {}

  ngOnInit(): void {
    const conf = [
      {
        ticker: 'AAPL',
        name: 'Apple'
      },
      {
        ticker: 'MSFT',
        name: 'Microsoft'
      }
    ];

    this.portfolios$ = forkJoin(
      conf.map(({ ticker }) => this.dataProvider.getPrices(ticker))
    ).pipe(
      map(values =>
        values.map((prices, index) => ({
          name: conf[index].name,
          prices: prices
        }))
      )
    );
  }
}
