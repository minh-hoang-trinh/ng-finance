import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA_PROVIDERS } from './providers/data-providers';
import { MocksProvidersService } from './services/mocks-providers.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: DATA_PROVIDERS,
      useClass: MocksProvidersService
    }
  ]
})
export class DataProviderModule {}
