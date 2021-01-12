import { transition } from 'd3';
import React from 'react';
import styles from './index.less';

export default class Logo extends React.Component {
  render() {
    return <a className={styles.logo}></a>;
  }
}
