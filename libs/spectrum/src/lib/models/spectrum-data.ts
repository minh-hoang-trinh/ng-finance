export interface ChartData {
  name: string;
  type: 'bar' | 'line' | 'scatter';
  data: {
    name: string;
    value: number | number[];
  }[];
}

export type SpectrumData = ChartData[];
