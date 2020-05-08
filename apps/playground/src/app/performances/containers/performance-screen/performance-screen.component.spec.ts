import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceScreenComponent } from './performance-screen.component';
import { PerformancesModule } from '../../performances.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PerformanceScreenComponent', () => {
  let component: PerformanceScreenComponent;
  let fixture: ComponentFixture<PerformanceScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [PerformancesModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
