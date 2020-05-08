import { EChartOption } from 'echarts';

export class EChartsConfiguration {
  static get default(): Partial<EChartOption> {
    return {
      color: ['#488f31', '#2f4b7c', '#7a5195', '#ffa600'],
      animation: true,
      grid: {
        left: 40,
        right: 20,
        top: 50,
        bottom: 20
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        icon: 'roundRect',
        textStyle: {
          fontSize: 12
        },
        itemGap: 10,
        itemHeight: 14,
        top: 0,
        left: 0,
        bottom: 10,
        right: 30,
        selectedMode: true
      }
    };
  }
}
