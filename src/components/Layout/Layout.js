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

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Subscribe from '../Subscribe';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    headerActive: PropTypes.bool,
    headerMenu: PropTypes.bool,
  };

  static defaultProps = {
    headerActive: false,
    headerMenu: true,
  };

  state = {
    loading: true,
  };

  componentWillMount() {
    this.showLoader = setTimeout(() => this.setState({ loading: false }), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.showLoader);
  }

  render() {
    return (
      <div>
        <div className={cx(s.loader, this.state.loading ? s.show : s.hide)}>
          <div className={s.loaderWrapper}>
            <svg className={s.logo} width="100" height="119">
              <path
                d="M75.549 76.19L54.226 88.507c-.692.402-1.52.672-2.398.84l-.02-31.883 27.6-15.984c.301.854.489 1.72.489 2.537v24.64c0 2.76-1.955 6.15-4.348 7.531zm-51.342 0c-2.391-1.381-4.346-4.773-4.346-7.533V44.018c0-.82.189-1.695.495-2.558L47.9 57.462l.023 31.884c-.873-.169-1.699-.439-2.392-.838L24.207 76.189zm21.324-52.024c2.392-1.38 6.305-1.38 8.695 0L75.55 36.482c.68.395 1.318.961 1.89 1.62L49.855 54.079 22.327 38.088c.574-.65 1.205-1.213 1.88-1.606l21.324-12.316zm8.818-23.13c-2.393-1.381-6.305-1.381-8.694 0L4.347 24.901C1.957 26.28 0 29.67 0 32.433V80.16c0 2.764 1.957 6.152 4.347 7.534l24.43 14.113c2.392 1.383 5.951 4.105 7.911 6.051l9.752 9.682c1.96 1.948 5.164 1.948 7.122 0l9.754-9.684c1.96-1.944 5.516-4.667 7.909-6.049l24.43-14.113c2.39-1.382 4.345-4.77 4.345-7.534V32.433c0-2.763-1.955-6.153-4.345-7.532L54.349 1.036z"
                fill="#FB863B"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <Header
          isActive={this.props.headerActive}
          withMenu={this.props.headerMenu}
        />
        {this.props.children}
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
