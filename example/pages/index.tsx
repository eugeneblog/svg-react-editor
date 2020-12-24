import React from 'react';
import styles from './index.css';
import Editor, { Flow } from '../../lib/index';

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

export default () => (
  <Editor className={styles.normal}>
    <Flow className={styles.graph} data={data} />
  </Editor>
);
