import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaseComponent } from './show-case.component';
import { PerformancesModule } from '../../performances.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ShowCaseComponent', () => {
  let component: ShowCaseComponent;
  let fixture: ComponentFixture<ShowCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [PerformancesModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
