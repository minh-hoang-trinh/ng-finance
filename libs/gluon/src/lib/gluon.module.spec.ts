import { async, TestBed } from '@angular/core/testing';
import { GluonModule } from './gluon.module';

describe('GluonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GluonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GluonModule).toBeDefined();
  });
});
