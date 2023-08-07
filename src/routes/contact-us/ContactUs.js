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
import s from './ContactUs.css';
import Link from '../../components/Link';

class ContactUs extends React.Component {
  state = {
    isAllFilled: true,
    isSent: true,
  };

  handleChange = () => {
    this.setState({
      isAllFilled: false,
    });
  };

  handleSumbit = () => {
    this.setState({
      isSent: true,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.hero}>
          <div className={s.heroTitle}>
            <div className={s.container}>
              <h1 className={s.title}>
                <span>
                  Your voice matters{' '}
                  <span role="img" aria-label="cheering megaphone">
                    📣
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.container}>
            <div className={s.contentsBorder} />
            <Link to="mailto:hi@qubicle.id" className={s.contactCover}>
              <span className={s.contactCoverText}>hi@qubicle.id</span>
              <img
                className={s.contactCoverImage}
                src="https://66.media.tumblr.com/2115e2a1242ccff91ef6750655d3443c/tumblr_mnydh5zjt11sutmfto3_r1_400.gif"
                alt="contact qubicle"
              />
            </Link>
            <div className={s.contactContent}>
              <h1>We are better because of you</h1>
              <p>
                Got burning questions? Aching to magnify an idea? Want to give
                us feedback? Or interested in a partnership? As we strive to
                continuously create better content and amplify stories from
                individuals and communities, we feel it essential to hear what
                you have to say. Feel free to send us your questions, thoughts,
                or propositions by filling out the form
              </p>
              <div className={s.contentsDivider}>
                <svg width="44px" height="8px" viewBox="0 0 44 8">
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-618.000000, -7000.000000)"
                      fill="#4A4A4A"
                      fillRule="nonzero"
                    >
                      <g transform="translate(30.000000, 544.000000)">
                        <g transform="translate(588.000000, 6456.000000)">
                          <path d="M40,8 C37.790861,8 36,6.209139 36,4 C36,1.790861 37.790861,0 40,0 C42.209139,0 44,1.790861 44,4 C44,6.209139 42.209139,8 40,8 Z M22,8 C19.790861,8 18,6.209139 18,4 C18,1.790861 19.790861,0 22,0 C24.209139,0 26,1.790861 26,4 C26,6.209139 24.209139,8 22,8 Z M4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,0 4,0 C6.209139,0 8,1.790861 8,4 C8,6.209139 6.209139,8 4,8 Z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className={s.contactForm}>
              <form>
                <div className={cx(s.formInline, s.formData)}>
                  <div className={s.formGroup}>
                    <span className={s.formLabel}>Name</span>
                    <input
                      className={cx(
                        s.formInput,
                        this.state.isAllFilled ? s.error : '',
                      )}
                      type="text"
                      id="name"
                    />
                    {this.state.isAllFilled ? (
                      <span className={cx(s.formAlert, s.error)}>
                        Please fill your name*
                      </span>
                    ) : null}
                  </div>
                  <div className={s.formGroup}>
                    <span className={s.formLabel}>Email</span>
                    <input
                      className={cx(
                        s.formInput,
                        this.state.isAllFilled ? s.error : '',
                      )}
                      type="email"
                      id="email"
                    />
                    {this.state.isAllFilled ? (
                      <span className={cx(s.formAlert, s.error)}>
                        Please fill your email**
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Tell Us All About It</span>
                  <textarea
                    className={cx(
                      s.formTextArea,
                      this.state.isAllFilled ? s.error : '',
                    )}
                    type="text"
                    id="message"
                    onChange={this.handleChange}
                  />
                  {this.state.isAllFilled ? (
                    <span className={cx(s.formAlert, s.error)}>
                      Please tell us your thoughts**
                    </span>
                  ) : null}
                </div>
                <div className={s.formButton}>
                  <button
                    type="submit"
                    disabled={this.state.isAllFilled}
                    onClick={this.handleSumbit}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
              {this.state.isSent ? (
                <div className={s.contactSent}>
                  <h3>
                    Thank you for touching in with us, your message has been
                    sent!
                  </h3>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContactUs);
