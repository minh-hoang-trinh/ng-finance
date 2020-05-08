import { TimeSeries } from '@terces/gluon';

export interface Portfolio {
  readonly name: string;
  readonly prices: TimeSeries;
}
