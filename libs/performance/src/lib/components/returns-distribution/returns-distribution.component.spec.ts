import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsDistributionComponent } from './returns-distribution.component';
import { PerformanceModule } from '../../performance.module';

describe('ReturnsDistributionComponent', () => {
  let component: ReturnsDistributionComponent;
  let fixture: ComponentFixture<ReturnsDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PerformanceModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
