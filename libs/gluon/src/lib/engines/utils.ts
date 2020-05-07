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

/**
 * Align time series list
 * @param seriesList series list to be aligned
 */
export const alignTimeSeries = (...seriesList: TimeSeries[]) => {
  if (!seriesList) {
    return;
  }

  if (seriesList.length < 2) {
    return seriesList;
  }

  const results: TimeSeries[] = new Array(seriesList.length).fill([]);

  const ref = sortTimeSeries(seriesList[0]);

  results[0] = ref;

  for (let seriesIndex = 0; seriesIndex < ref.length; seriesIndex++) {
    for (let i = 1; i < seriesList.length; i++) {
      results[seriesIndex].push(
        seriesList[seriesIndex].find(
          s => s.date.getTime() === ref[i].date.getTime()
        )
      );
    }
  }

  return results;
};
