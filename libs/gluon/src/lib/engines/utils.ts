import { TimeSeries } from '../models';

/**
 * Sort time series by date
 *
 * @param series series to be sorted
 * @param operator asc or desc
 */
export const sortTimeSeries = (
  series: TimeSeries,
  operator: 'asc' | 'desc' = 'asc'
): TimeSeries => {
  if (!series) {
    return;
  }

  const op = operator === 'asc' ? 1 : -1;
  return [...series].sort(
    (r1, r2) => op * (r1.date.getTime() - r2.date.getTime())
  );
};
