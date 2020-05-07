import { TimeSeries } from '../models';

/**
 * Simple linear regression
 * @param x ref time series
 * @param y target time series
 */
export const linearRegression = (x: TimeSeries, y: TimeSeries) => {
  if (x.length !== y.length) {
    throw new Error('x & y should be aligned first !');
  }

  let sX = 0;
  let sY = 0;
  let sXSquare = 0;
  let sXY = 0;

  for (let i = 0; i < x.length; i++) {
    sX += x[i].value;
    sY += y[i].value;
    sXSquare += Math.pow(x[i].value, 2);
    sXY += x[i].value * y[i].value;
  }

  const df = x.length;

  const beta = (df * sXY - sX * sY) / (df * sXSquare - Math.pow(sX, 2));

  const alpha = (sY - beta * sX) / df;

  return [beta, alpha];
};
