import { TestBed } from '@angular/core/testing';

import { PerformanceEChartService } from './performance-echart.service';

describe('PerformanceECharService', () => {
  let service: PerformanceEChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceEChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
