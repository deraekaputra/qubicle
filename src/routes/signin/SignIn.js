/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignIn.css';
import Link from '../../components/Link';
import logoUrl from '../../../public/logo-mark.svg';
import illustrationUrl from '../../../public/1_k08BmE_1I7KaMqQ0V5oK7A.png';

class SignIn extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.nav}>
          <div className={s.navWrapper}>
            <Link className={s.brand} to="/">
              <img src={logoUrl} alt="Qubicle" />
            </Link>
            <div className={s.action}>
              <div className={s.actionWrapper}>
                <span>No account?</span>
                <Link className={s.actionButton} to="/signup-step1">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.contentsWrapper}>
            <div className={s.contentsTitle}>
              <h1>
                Welcome back!{' '}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <h3>Please sign in to continue to Qubicle.</h3>
            </div>
            <form className={s.form}>
              <div className={s.formWrapper}>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Email</span>
                  <input
                    className={cx(s.formInput, s.error)}
                    type="email"
                    id="email"
                  />
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Password</span>
                  <input
                    className={s.formInput}
                    type="password"
                    id="password"
                  />
                </div>
                <div className={s.formAlert}>
                  <span>
                    Oops, it seems your email and password did not match. Please
                    try again.
                  </span>
                </div>
                <div className={s.formActions}>
                  <Link className={s.formForgot} to="/forgot-password">
                    Forgot your password?
                  </Link>
                  <button className={s.formButton} type="submit" disabled>
                    SIGN IN
                  </button>
                </div>
              </div>
            </form>
            <img
              className={s.illustration}
              src={illustrationUrl}
              alt="illustration"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SignIn);
