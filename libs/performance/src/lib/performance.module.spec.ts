import { async, TestBed } from '@angular/core/testing';
import { PerformanceModule } from './performance.module';

describe('PerformanceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PerformanceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PerformanceModule).toBeDefined();
  });
});
