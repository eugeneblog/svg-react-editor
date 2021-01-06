import React from 'react';

interface DrawingProps {
  attrs: any;
  data: any;
}

const svgStyle: React.CSSProperties = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: '#f4f4f4',
  backgroundImage: 'none',
  minHeight: '1523px',
  minWidth: '3671px',
};

const Drawing: React.FC<DrawingProps> = ({ attrs }) => {
  return <svg style={svgStyle} {...attrs}></svg>;
};

export default Drawing;
