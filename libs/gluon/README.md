# Gluon

Finance Compute Engine

## Install

```bash

$ npm i @terces/gluon

```

## Usage

### Ex-Post

#### Returns

```typescript
import { computeReturns, TimeSeries } from '@terces/gluon';

...

const prices: TimeSeries = [{
  date: new Date("2020-01-01"),
  value: 14.65
},{
  date: new Date("2020-01-02"),
  value: 15.49
},{
  date: new Date("2020-01-03"),
  value: 16.65
}];

const returns = computeReturns(prices);
```

#### Performances

```typescript
import { computePerformances, TimeSeries } from '@terces/gluon';

...

const returns: TimeSeries = [{
  date: new Date("2020-01-02"),
  value: 0.021392
},{
  date: new Date("2020-01-01"),
  value: 0.021492
},{
  date: new Date("2020-01-03"),
  value: 0.021292
}];

// if input series is not sorted, for one time compute only, you can set sorted to false
const performancesBase100 = computePerformances(returns, 100, false);
```

## Author

Terceser - [GitHub](https://github.com/terceser/ng-finance)

## License

[MIT](https://github.com/terceser/ng-finance/blob/develop/LICENSE)

## TODO

- ExPost measures
- ExAnte
- Beta
- Rolling Correlation
- Use a lib like decimaljs to fix floating point precision
