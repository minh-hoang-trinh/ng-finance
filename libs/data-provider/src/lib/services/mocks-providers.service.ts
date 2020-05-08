import { Injectable } from '@angular/core';
import { DataProviderService } from '../models/data-provider-service';
import { Observable, of } from 'rxjs';
import { TimeSeries } from '@terces/gluon';
import { AAPL } from '../mocks/aapl';
import { MSFT } from '../mocks/msft';

@Injectable({
  providedIn: 'root'
})
export class MocksProvidersService extends DataProviderService {
  constructor() {
    super();
  }

  getPrices(ticker: string): Observable<TimeSeries> {
    if (ticker === 'AAPL') {
      return of(AAPL.prices);
    }

    if (ticker === 'MSFT') {
      return of(MSFT.prices);
    }

    throw new Error(`Unknown ticker ${ticker}`);
  }
}
