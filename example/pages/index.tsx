import React, { useState } from 'react';
import styles from './index.css';
import Editor, { Flow } from '../../src/index';

const radius = 6;
const step = radius * 2;
const width = 1000;
const height = 500;
const theta = Math.PI * (3 - Math.sqrt(5));

const data = {
  node: Array.from({ length: 1000 }, (_, i) => {
    const radius = step * Math.sqrt((i += 0.5)),
      a = theta * i;
    return [
      width / 2 + radius * Math.cos(a),
      height / 2 + radius * Math.sin(a),
    ];
  }),
};

const initialFlowData = [
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1', data },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2', data: null },
  {
    title: 'Tab 3',
    content: 'Content of Tab 3',
    key: '3',
    closable: false,
    data: null,
  },
];

const Graph = () => {
  return (
    <Editor className={styles.normal}>
      <Flow id="container" data={initialFlowData} />
    </Editor>
  );
};

export default Graph;
