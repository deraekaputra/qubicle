/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.svg';

class Header extends React.Component {
  static propTypes = {
    isActive: PropTypes.bool,
    withMenu: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
    withMenu: true,
  };

  state = {
    isScroll: true,
    isHover: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleHover = event => {
    this.setState({
      isHover: event,
    });
  };

  handleScroll = () => {
    const isScroll = window.scrollY < 125;
    if (isScroll !== this.state.isScroll) {
      this.setState({ isScroll });
    }
  };

  render() {
    const { isActive, withMenu } = this.props;
    return (
      <div
        className={cx(
          s.root,
          isActive ? s.navScroll : '',
          this.state.isScroll ? s.navTop : s.navScroll,
          this.state.isHover ? '' : s.navScroll,
        )}
      >
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img src={logoUrl} alt="Qubicle" />
          </Link>
          <Navigation
            onMouseEnter={() => this.handleHover(!this.state.isHover)}
            onMouseLeave={() => this.handleHover(!this.state.isHover)}
            interestMenu={withMenu}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
