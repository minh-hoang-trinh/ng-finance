import { InjectionToken } from '@angular/core';
import { DataProviderService } from '../models/data-provider-service';

export const DATA_PROVIDERS = new InjectionToken<DataProviderService>(
  'DataProviderService'
);
