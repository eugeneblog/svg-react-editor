import React from 'react';
import * as d3 from 'd3';
/**
 * 将传入的data渲染成dom
 * @param ref
 * @param data
 */
interface DrawingDatas {}

export default function useRender(
  ref: React.RefObject<SVGAElement>,
  data: DrawingDatas[],
) {
  React.useEffect(() => {
    const svg = d3.select(ref.current);
    svg.data(data);
  }, [data]);
}
