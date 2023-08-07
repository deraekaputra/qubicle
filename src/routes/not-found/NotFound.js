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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotFound.css';
import Link from '../../components/Link';
import logoUrl from '../../../public/logo-mark.svg';

class NotFound extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.nav}>
          <div className={s.navWrapper}>
            <Link className={s.brand} to="/">
              <img src={logoUrl} alt="Qubicle" />
            </Link>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.contentsWrapper}>
            <div className={s.contentsStatus}>
              <h1>{this.props.status}</h1>
            </div>
            <div className={s.contentsTitle}>
              <h1>
                We couldn&rsquo;t find this page.{' '}
                <span role="img" aria-label="unamused face">
                  😱
                </span>
              </h1>
              <h3>Maybe it&rsquo;s out there, somewhere...</h3>
              <h3>
                You can always find insightful contents on our{' '}
                <Link to="/">homepage</Link>.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NotFound);
