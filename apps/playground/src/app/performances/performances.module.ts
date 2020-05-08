import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { DataProviderModule } from '@ng-finance/data-provider';
import { PerformanceScreenComponent } from './containers/performance-screen/performance-screen.component';
import { PerformanceModule } from '@ng-finance/performance';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowCaseComponent, PerformanceScreenComponent],
  imports: [
    CommonModule,
    PerformanceModule,
    DataProviderModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerformanceScreenComponent
      }
    ])
  ]
})
export class PerformancesModule {}
