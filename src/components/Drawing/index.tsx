import React from 'react';
import styles from './index.less';

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
  return (
    <div className={styles.digaramContainer}>
      <svg style={svgStyle} {...attrs}>
        <circle
          cx="100"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="2"
          fill="red"
        />
      </svg>
    </div>
  );
};

export default Drawing;
