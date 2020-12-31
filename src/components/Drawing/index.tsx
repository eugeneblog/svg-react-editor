import React from 'react';

interface DrawingProps {
  attrs: any;
  data: any;
}

const defaultStyle: React.CSSProperties = { background: '#f4f4f4' };
const Drawing: React.FC<DrawingProps> = ({ attrs }) => {
  return <svg {...attrs} viewBox="0 0 1000 500" style={defaultStyle}></svg>;
};

export default Drawing;
