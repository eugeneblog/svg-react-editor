import * as d3 from "d3"
import React from 'react';
import { FLOW_CONTAINER_ID } from '../../common/constants'
import { GraphConfig, FlowData, Graph } from '@/common/interface'

interface FlowProps {
  style?: React.CSSProperties;
  className?: string;
  data: FlowData;
  graphConfig?: Partial<GraphConfig>;
}

interface FlowState {

}

class Flow extends React.Component<FlowProps, FlowState>{
  static defaultProps = {
    graphConfig: {}
  }

  graph: Graph | null  = null;

  width: any = 1000;

  height: any = 500;

  containerId = `${FLOW_CONTAINER_ID}_container`;

  initGraph = () => {
    const { containerId, width, height } = this
    const { data } = this.props
    // @ts-ignore
    const svg = d3.create("svg").attr("viewBox", [0, 0, width, height])
    const g = svg.append("g")
    const zoom = d3.zoom().scaleExtent([1, 40])

    g.selectAll("circle")
      .data(data.node)
      .join("circle")
      .attr("cx", ([x]: any) => x)
      .attr("cy", ([, y]: any) => y)
      .attr("r", 6)
      .attr("fill", (d:any, i:any) => d3.interpolateRainbow(i / 360))

    svg.call(zoom)

    d3.select(`#${containerId}`).append(function() {
      return svg.node()
    })
  }

  render(): React.ReactNode {
    const { containerId } = this
    return (
      <div id={containerId} style={{border: '1px solid #f4f4f4', background: "#f3f3f3", height: "100%"}}/>
    )
  }

  componentDidMount(): void {
    this.initGraph()
  }
}

export default Flow
