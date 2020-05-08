import { TimeSeries } from '@terces/gluon';
import { Observable } from 'rxjs';

export abstract class DataProviderService {
  /**
   * Get prices of an instruments
   * @param args any
   */
  abstract getPrices(...args: any): Observable<TimeSeries>;
}
