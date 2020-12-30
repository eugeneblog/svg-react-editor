import React from 'react';

interface DrawingProps {
  attrs: any;
}
const Drawing: React.FC<DrawingProps> = ({ attrs }) => {
  return <svg {...attrs}></svg>;
};

export default Drawing;
