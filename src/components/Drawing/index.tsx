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

// 元素拖拽
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

// svg画布缩放
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

// 网格线
function useGrid(ref: React.RefObject<SVGAElement>) {
  React.useEffect(() => {
    const svg = ref.current,
      space = 100,
      w = svg?.scrollWidth || 0,
      h = svg?.scrollHeight || 0,
      data = d3.range(w / space);

    d3.select(svg)
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('line')
      .attr('x1', d => d * space)
      .attr('x2', d => d * space)
      .attr('y1', 0)
      .attr('y2', h)
      .attr('style', 'stroke:rgb(99,99,99);stroke-width:0.5');

    d3.select(svg)
      .append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('line')
      .attr('y1', d => d * space)
      .attr('y2', d => d * space)
      .attr('x1', 0)
      .attr('x2', w)
      .attr('style', 'stroke:rgb(99,99,99);stroke-width:0.5');
  }, []);
}

export default Drawing;
