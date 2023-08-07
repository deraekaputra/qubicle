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
import s from './Subscribe.css';
import illustration from './1_vZ8miTqyE3eUnBqQjvLJeA.png';

class Subscribe extends React.Component {
  state = {
    isSubscribed: false,
    subscribeSuccess: false,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.subscribeWrapper}>
            <h1 className={s.subscribeTitle}>Stay Updated.</h1>
            <span className={s.subscribeDesc}>
              Every day, a dose of inspirations.
              <span role="img" aria-label="Party">
                🎉
              </span>
            </span>
            {this.state.isSubscribed ? (
              <span
                className={cx(
                  s.subscribeAlert,
                  this.state.subscribeSuccess ? s.success : s.error,
                )}
              >
                {this.state.subscribeSuccess
                  ? 'Thank you for subscribing with us!'
                  : "You're already subsribed!"}
              </span>
            ) : null}
            <form className={s.subscribeInput}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <img
              className={s.subscribeImage}
              src={illustration}
              alt="Subscribe Qubicle"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Subscribe);
