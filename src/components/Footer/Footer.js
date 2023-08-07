/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import Logo from './logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.footerWrapper}>
            <div className={s.footerLogo}>
              <img src={Logo} alt="Qubicle Logo" />
            </div>
            <div className={s.footerMenu}>
              <nav className={s.footerNav}>
                <ul>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">CONTACT US</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-use">TERMS OF USE</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">PRIVACY POLICY</Link>
                  </li>
                </ul>
              </nav>
              <small>&copy; 2018 Qubicle. All rights reserved</small>
            </div>
            <div className={s.footerSocial}>
              <span>FOLLOW US</span>
              <ul>
                <li>
                  <Link to="/" target="_blank">
                    <i className={s.facebook} />
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <i className={s.instagram} />
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank">
                    <i className={s.twitter} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
