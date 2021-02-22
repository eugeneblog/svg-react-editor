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
  useDrag(ref);
  useZoom(ref);
  useGrid(ref);

  return (
    <div className={styles.digaramContainer}>
      <svg style={svgStyle} {...attrs} ref={ref}>
        <circle cx="100" cy="50" r="40" strokeWidth="2" fill="red" />
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
    const gx = d3.select(svg).append('g');
    const gy = d3.select(svg).append('g');

    const gDot = d3
      .select(svg)
      .append('g')
      .attr('fill', 'none')
      .attr('stroke-linecap', 'round');

    const data = (function() {
      const random = d3.randomNormal(0, 0.2);
      const sqrt3 = Math.sqrt(3);
      return [].concat(
        Array.from({ length: 300 }, () => [
          random() + sqrt3,
          random() + 1,
          0,
        ]) as any,
        Array.from({ length: 300 }, () => [
          random() - sqrt3,
          random() + 1,
          1,
        ]) as any,
        Array.from({ length: 300 }, () => [random(), random() - 1, 2]) as any,
      );
    })();

    const k = svg !== null ? svg.clientHeight / svg.clientWidth : 0;
    const w = svg ? svg.clientWidth : 0;
    const x = d3
      .scaleLinear()
      .domain([-4.5, 4.5])
      .range([0, w]);
    const y = d3.scaleLinear().domain([-4.5 * k, 4.5 * k]);

    gDot
      .selectAll('path')
      .data(data)
      .join('path')
      .attr('d', d => `M${x(d[0])},${y(d[1])}h0`)
      .attr('stroke', '#1f77b4');

    function zoomed(e: D3ZoomEvent<any, any>) {
      const { transform } = e;
      const zx = transform.rescaleX(x).interpolate(d3.interpolateRound);
      const zy = transform.rescaleY(y).interpolate(d3.interpolateRound);
      gDot.attr('transform', transform).attr('stroke-width', 5 / transform.k);
      gx.call(function(g) {
        return g;
      }, zx);
      gy.call(function(g) {
        return g;
      }, zy);
    }
    d3.select(svg)
      .call(zoom)
      .call(zoom.transform, d3.zoomIdentity);
  }, []);
}

function useGrid(ref: React.RefObject<SVGElement>) {
  React.useEffect(() => {
    const svg = ref.current;
    const gGrid = d3
      .select(svg)
      .append('g')
      .attr('fill', 'none')
      .attr('stroke-linecap', 'round');
  }, []);
}

export default Drawing;
