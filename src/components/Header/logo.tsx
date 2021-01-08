import { transition } from 'd3';
import React from 'react';

const logoStyle: React.CSSProperties = {
  display: 'block',
  position: 'absolute',
  width: '32px',
  height: '36px',
  margin: '14px 0 8px 16px',
  background: 'rgb(240, 135, 5)',
  backgroundPosition: 'center center',
  backgroundSize: '90% 90%',
  backgroundRepeat: 'no-repeat',
  cursor: 'default',
  transition: 'all 125ms linear 0s',
  borderRadius: '3px',
};

export default class Logo extends React.Component {
  render() {
    return <div style={logoStyle}></div>;
  }
}
