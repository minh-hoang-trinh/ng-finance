import { computeReturns, computePerformances } from './ex-post';

describe('ExPost', () => {
  describe('compute returns', () => {
    it('should return undefined with null or undefined input', () => {
      expect(computeReturns(null)).toBeFalsy();
      expect(computeReturns(undefined)).toBeFalsy();
    });

    it('should return empty array with empty input', () => {
      expect(computeReturns([])).toEqual([]);
    });

    it('should be able to compute', () => {
      expect(
        computeReturns([
          {
            date: new Date('2020-01-01'),
            value: 100
          },
          {
            date: new Date('2020-01-02'),
            value: 101
          },
          {
            date: new Date('2020-01-03'),
            value: 102
          }
        ])
      ).toEqual([
        {
          date: new Date('2020-01-01'),
          value: undefined
        },
        {
          date: new Date('2020-01-02'),
          value: 0.01
        },
        {
          date: new Date('2020-01-03'),
          value: 1 / 101
        }
      ]);
    });
  });

  describe('compute performances', () => {
    it('should return undefined with null or undefined input', () => {
      expect(computePerformances(null)).toBeFalsy();
      expect(computePerformances(undefined)).toBeFalsy();
    });

    it('should return empty array with empty input', () => {
      expect(computePerformances([])).toEqual([]);
    });

    it('should be able to compute', () => {
      expect(
        computePerformances([
          {
            date: new Date('2020-01-01'),
            value: 0.01
          },
          {
            date: new Date('2020-01-02'),
            value: 0.02
          },
          {
            date: new Date('2020-01-03'),
            value: 0.005
          }
        ])
      ).toEqual([
        {
          date: new Date('2020-01-01'),
          value: 100
        },
        {
          date: new Date('2020-01-02'),
          value: 102
        },
        {
          date: new Date('2020-01-03'),
          value: 102 * 1.005
        }
      ]);
    });
  });
});
