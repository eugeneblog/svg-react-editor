import React from 'react';
import * as d3 from 'd3';
import styles from './index.less';
import { D3ZoomEvent } from 'd3';

interface DrawingProps {
  attrs: any;
  data: any;
}

const svgStyle: React.CSSProperties = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'none',
  minHeight: '1523px',
  minWidth: '3671px',
};

const Drawing: React.FC<DrawingProps> = ({ attrs }) => {
  const ref = React.useRef<SVGAElement>(null);
  useGrid(ref);
  useDrag(ref);
  useZoom(ref);

  return (
    <div className={styles.digaramContainer}>
      <svg style={svgStyle} {...attrs} ref={ref}>
        <g>
          <circle cx="100" cy="50" r="40" strokeWidth="2" fill="red" />
        </g>
      </svg>
    </div>
  );
};

function useDrag(ref: React.RefObject<SVGAElement>) {
  React.useEffect(() => {
    const svg = ref.current;
    const drag: d3.DragBehavior<any, any, any> = d3
      .drag()
      .on('start', function(d) {
        d3.select(this).attr('stroke', 'blue');
      })
      .on('drag', function(d) {
        d3.select(this)
          .raise()
          .attr('cx', (d.cx = d.x))
          .attr('cy', (d.cy = d.y));
      })
      .on('end', function() {
        d3.select(this).attr('stroke', null);
      });

    d3.select(svg)
      .selectAll('circle')
      .call(drag);
  }, []);
}

function useZoom(ref: React.RefObject<SVGAElement>) {
  React.useEffect(() => {
    const zoom: d3.ZoomBehavior<any, any> = d3
      .zoom()
      .scaleExtent([0.5, 32])
      .on('zoom', zoomed);
    const svg = ref.current;
    const g = d3.select(svg).selectAll('g:nth-child(1)');
    function zoomed(e: D3ZoomEvent<SVGElement, any>) {
      g.attr('transform', e.transform as any);
    }
    d3.select(svg).call(zoom);
  }, []);
}

function useGrid(ref: React.RefObject<SVGAElement>) {
  React.useEffect(() => {
    const x = d3.scaleLinear().range([0, 3670]);
    const y = d3.scaleLinear().range([1523, 0]);
    const path = d3
      .line()
      .x(function(t) {
        return x(t as any);
      })
      .y(function(t) {
        return y(t as any);
      });
    const svg = ref.current;

    d3.select(svg)
      .append('g')
      .attr('class', 'axis axis--x')
      .call(
        d3
          .axisBottom(x)
          .tickSize(-3670)
          .tickPadding(6) as any,
      )
      .append('text')
      .attr('text-anchor', 'end')
      .attr('font-weight', 'bold')
      .text('t = ');

    d3.select(svg)
      .append('g')
      .attr('class', 'axis axis--y')
      .call(
        d3
          .axisLeft(y)
          .tickSize(-1523)
          .tickPadding(6),
      );
  }, []);
}

export default Drawing;
