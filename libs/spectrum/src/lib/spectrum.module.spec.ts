import { async, TestBed } from '@angular/core/testing';
import { SpectrumModule } from './spectrum.module';

describe('SpectrumModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SpectrumModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SpectrumModule).toBeDefined();
  });
});
