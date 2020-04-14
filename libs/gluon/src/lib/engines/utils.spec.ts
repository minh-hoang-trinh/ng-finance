import { sortTimeSeries } from './utils';

describe('Utils', () => {
  describe('sortTimeSeries', () => {
    it('should return undefined with null or undefined input', () => {
      expect(sortTimeSeries(null)).toBeFalsy();
      expect(sortTimeSeries(undefined)).toBeFalsy();
    });

    it('should return empty array with empty input', () => {
      expect(sortTimeSeries([])).toEqual([]);
    });

    [
      {
        input: [
          {
            date: new Date('2020-01-03'),
            value: 100
          },
          {
            date: new Date('2020-01-01'),
            value: 101
          },
          {
            date: new Date('2020-01-02'),
            value: 102
          }
        ],
        expectedAsc: [
          {
            date: new Date('2020-01-01'),
            value: 101
          },
          {
            date: new Date('2020-01-02'),
            value: 102
          },
          {
            date: new Date('2020-01-03'),
            value: 100
          }
        ],
        expectedDesc: [
          {
            date: new Date('2020-01-03'),
            value: 100
          },
          {
            date: new Date('2020-01-02'),
            value: 102
          },
          {
            date: new Date('2020-01-01'),
            value: 101
          }
        ]
      }
    ].forEach(spec => {
      it('should sort time series correctly', () => {
       expect(sortTimeSeries(spec.input)).toEqual(spec.expectedAsc);
        expect(sortTimeSeries(spec.input, 'desc')).toEqual(spec.expectedDesc);
      });
    });
  });
});
