import React from 'react';
import Logo from './logo';
import PageTitle from './PageTitle';
import pick from 'lodash/pick';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div {...pick(this.props, ['className', 'style'])}>
        <Logo />
        <PageTitle />
        {this.props.children}
      </div>
    );
  }
}
