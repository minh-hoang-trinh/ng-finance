import { DateValue } from '../models';
import { sortTimeSeries } from './utils';
import { TimeSeries } from '../models/time-series';

/**
 * Compute returns from prices series
 *
 * @param prices prices in TimeSeries format
 * @param sorted true if series is already sorted
 */
export const computeReturns = (
  prices: TimeSeries,
  sorted: boolean = true
): TimeSeries => {
  const sortedPrices = sorted ? prices : sortTimeSeries(prices);

  return sortedPrices?.reduce(
    (returns: TimeSeries, p: DateValue, index: number) =>
      returns.concat({
        date: p.date,
        value:
          index === 0
            ? undefined
            : (p.value - sortedPrices[index - 1].value) /
              sortedPrices[index - 1].value
      }),
    []
  );
};

/**
 * Compute performances from returns series
 *
 * @param returns returns in TimeSeries format
 * @param sorted true if series is already sorted
 * @param base performance base (default to 100)
 */
export const computePerformances = (
  returns: TimeSeries,
  base: number = 100,
  sorted: boolean = true
): TimeSeries => {
  const sortedReturns = sorted ? returns : sortTimeSeries(returns);

  return sortedReturns?.reduce(
    (performances: TimeSeries, r: DateValue, index: number) =>
      performances.concat({
        date: r.date,
        value:
          index === 0 ? base : performances[index - 1].value * (1 + r.value)
      }),
    []
  );
};
