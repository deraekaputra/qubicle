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
import s from './ForgotPassword.css';
import Link from '../../components/Link';
import logoUrl from '../../../public/logo-mark.svg';

class ForgotPassword extends React.Component {
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
                It seems your lost your way.{' '}
                <span role="img" aria-label="face with monocle">
                  🧐
                </span>
              </h1>
              <h3>
                Please fill the box below. We&rsquo;ll send you an email to
                confirm your address and re-create your password.
              </h3>
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
                <div className={cx(s.formAlert, s.error)}>
                  <span>
                    Oops, your email is not registered yet. Go to sign up page
                    to get your Qubicle account.
                  </span>
                </div>
                <div className={s.formActions}>
                  <button className={s.formButton} type="submit" disabled>
                    CONFIRM
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ForgotPassword);
