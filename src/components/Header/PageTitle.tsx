import React from 'react';
import styles from './index.less';

interface PageTitleProps {
  title?: string;
}

export default class PageTitle extends React.Component<PageTitleProps> {
  clickHandle() {}

  render() {
    const { title } = this.props;

    return (
      <div className={styles.pageTitle}>
        <a className={styles.pageTitleFont} onClick={this.clickHandle}>
          {title || 'Untitled Diagram'}
        </a>
      </div>
    );
  }
}
