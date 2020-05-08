import { async, TestBed } from '@angular/core/testing';
import { DataProviderModule } from './data-provider.module';

describe('DataProviderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataProviderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataProviderModule).toBeDefined();
  });
});
