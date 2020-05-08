import { SpectrumData } from './spectrum-data';

export interface SpectrumOption {
  data: SpectrumData;
  formatterTooltip?: (value: string | number) => string;
  formatterX?: (value: string | number) => string;
  formatterY?: (value: string | number) => string;
}
