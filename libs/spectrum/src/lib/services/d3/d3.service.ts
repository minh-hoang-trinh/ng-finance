import { ElementRef, Injectable } from '@angular/core';
import { ChartService } from '../../models/chart-service';
import * as d3 from 'd3';
import { SpectrumOption } from '../../models';

// TODO
@Injectable()
export class D3Service extends ChartService {
  constructor() {
    super();
  }

  public createChart(el: ElementRef): Object {
    const element = el.nativeElement;
    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    // append the svg object to the body of the page
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    return { selection: svg, width, height };
  }

  public setOption(
    { svg, width, height }: { svg: d3.Selection<SVGGElement, null, null, null>; width: number; height: number },
    option: SpectrumOption
  ): void {
    /*const data = option.data;

    // X axis
    const x0 = d3
      .scaleBand()
      .range([0, width])
      .domain(data[0].data.map(d => d.name))
      .padding(0.2);

    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x0))
      .selectAll('text')
      .style('text-anchor', 'end');

    const maxY = d3.max(
      data.map(d => d.data).reduce((acc, cur) => acc.concat(cur), []),
      d => d.value
    );

    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, maxY])
      .nice();

    svg.append('g').call(d3.axisLeft(y).tickFormat(d3.format('.0%')));

    const size = data.length;

    data.forEach((d, index) => {
      svg
        .selectAll(d.name)
        .data(d.data)
        .enter()
        .append('rect')
        .attr('x', ({ name }) => x0(name))
        .attr('y', ({ value }) => y(value))
        .attr('width', x0.bandwidth() / size)
        .attr('height', ({ value }) => height - y(value))
        .attr('transform', () => `translate(${index * (x0.bandwidth() / size)},0)`)
        .attr('fill', 'blue')
        .style('opacity', 0.6);
    });*/
  }
}
