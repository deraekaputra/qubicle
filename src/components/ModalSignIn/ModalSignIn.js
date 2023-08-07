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
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ModalSignIn.css';
import Link from '../Link';

Modal.setAppElement('#app');

class ModalSignIn extends React.Component {
  static propTypes = {
    showModalSignIn: PropTypes.bool,
    closeModalSignIn: PropTypes.func,
    switchModal: PropTypes.func,
  };

  static defaultProps = {
    showModalSignIn: false,
    closeModalSignIn: null,
    switchModal: null,
  };

  render() {
    return (
      <Modal
        isOpen={this.props.showModalSignIn}
        contentLabel="Welcome to Qubicle"
        onRequestClose={this.props.closeModalSignIn}
        overlayClassName={s.ReactModal__Overlay}
        htmlOpenClassName={s.ReactModal__HtmlOpen}
        bodyOpenClassName={s.ReactModal__BodyOpen}
        style={{
          content: {
            maxWidth: 900,
            maxHeight: 600,
            margin: 'auto',
            paddingTop: 25,
            paddingRight: 40,
            paddingBottom: 25,
            paddingLeft: 40,
            backgroundColor: '#FFFFFF',
            WebkitOverflowScrolling: 'touch',
            border: 'none',
            borderRadius: 0,
          },
        }}
      >
        <div className={s.ReactModal__ContentSignIn}>
          <button
            className={s.closeModal}
            type="button"
            onClick={this.props.closeModalSignIn}
          >
            <svg width="16" height="16">
              <path
                d="M8 9.075l-6.702 6.7a.76.76 0 1 1-1.075-1.074L6.925 8l-6.7-6.702A.76.76 0 1 1 1.298.223L8 6.925l6.703-6.7a.76.76 0 1 1 1.075 1.074L9.075 8l6.701 6.703a.76.76 0 0 1-1.076 1.074L8 9.075z"
                fill="#08080F"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <h1>
            Welcome back.{' '}
            <span role="img" aria-label="waving hands">
              👋
            </span>
          </h1>
          <h3>
            Sign in to access your personalized homepage, follow interests and
            authors you love, and like for stories that matter to you.
          </h3>
          <div className={s.signingButtons}>
            <button type="button">
              <svg width="18" height="12">
                <path
                  d="M15.584 0C16.919 0 18 1.033 18 2.308v7.384C18 10.967 16.919 12 15.584 12H2.416C1.081 12 0 10.967 0 9.692V2.308C0 1.033 1.081 0 2.416 0h13.168zM6.987 5.942l-4.33 4.52h12.686l-4.35-4.52L9.464 7a.835.835 0 0 1-.946 0l-1.53-1.058zM1.63 2.27h-.02v7l4.068-4.23-4.048-2.77zm10.692 2.77l4.048 4.23v-7l-4.048 2.77zM9 5.422l5.678-3.884H3.322L9 5.423z"
                  fill="#08080F"
                  fillRule="nonzero"
                />
              </svg>
              Sign in with Email
            </button>
            <span>or</span>
            <button type="button">
              <svg width="18" height="18">
                <defs>
                  <path
                    d="M32.377 30v-6.964h2.388l.34-2.723h-2.728v-1.555c0-.736.21-1.474 1.252-1.474h1.578V14.81c-1.284-.173-2.46-.073-2.46-.073-2.368.137-3.31 1.92-3.128 4.02v1.556h-2.36v2.723h2.36V30h-8.385c-.429 0-.585-.045-.741-.129a.875.875 0 0 1-.364-.364c-.084-.156-.129-.312-.129-.741V13.234c0-.429.045-.585.129-.741a.875.875 0 0 1 .364-.364c.156-.084.312-.129.741-.129h15.532c.429 0 .585.045.741.129.157.084.28.207.364.364.084.156.129.312.129.741v15.532c0 .429-.045.585-.129.741a.875.875 0 0 1-.364.364c-.156.084-.312.129-.741.129h-4.39z"
                    id="facebookSignIn"
                  />
                </defs>
                <use
                  fill="#08080F"
                  xlinkHref="#facebookSignIn"
                  transform="translate(-20 -12)"
                  fillRule="evenodd"
                />
              </svg>
              Continue with Facebook
            </button>
            <button type="button">
              <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.167 4.554c0-.175-.003-.348-.01-.52A7.769 7.769 0 0 0 18 1.98a6.882 6.882 0 0 1-2.121.601 3.916 3.916 0 0 0 1.624-2.2c-.714.45-1.504.771-2.345.938C14.485.525 13.525.02 12.462 0 10.423-.034 8.77 1.753 8.77 3.992c0 .318.032.627.095.925-3.07-.205-5.792-1.863-7.613-4.362a4.365 4.365 0 0 0-.5 2.049c0 1.418.652 2.678 1.643 3.422a3.445 3.445 0 0 1-1.673-.531v.052c0 1.982 1.273 3.643 2.963 4.03-.31.092-.637.14-.972.138a3.259 3.259 0 0 1-.695-.08c.47 1.625 1.834 2.812 3.45 2.851C4.203 13.573 2.61 14.223.88 14.218c-.297 0-.592-.02-.881-.058C1.635 15.322 3.576 16 5.662 16c6.791.002 10.505-6.128 10.505-11.446z"
                  fill="#08080F"
                  fillRule="evenodd"
                />
              </svg>
              Continue with Twitter
            </button>
            <button type="button">
              <svg width="18" height="18">
                <path
                  d="M17.79 7.364H9.21v3.477h4.939c-.46 2.209-2.386 3.477-4.94 3.477-3.014 0-5.442-2.373-5.442-5.318 0-2.945 2.428-5.318 5.442-5.318A5.4 5.4 0 0 1 12.6 4.868l2.68-2.618C13.646.86 11.552 0 9.21 0 4.101 0 0 4.01 0 9s4.102 9 9.21 9C13.813 18 18 14.727 18 9c0-.532-.084-1.105-.21-1.636z"
                  fill="#08080F"
                  fillRule="evenodd"
                />
              </svg>
              Continue with Google
            </button>
          </div>
          <h3>
            No account?
            <button type="button" onClick={this.props.switchModal}>
              Create one
            </button>
          </h3>
          <span>
            To make Qubicle work, we log user data and share it with service
            providers. Click &ldquo;Sign in&rdquo; above to accept
            Qubicle&lsquo;s <Link to="/">Terms of Use</Link> &amp;{' '}
            <Link to="/">Privacy Policy</Link>.
          </span>
        </div>
      </Modal>
    );
  }
}

export default withStyles(s)(ModalSignIn);
