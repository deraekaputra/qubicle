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
import s from './SignUp.css';
import logoUrl from '../../../public/logo-mark.svg';

class SignUp extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    intmusic: '#F8DB65',
    intfood: '#73E4B2',
    intfashion: '#827AF9',
    intbeauty: '#FB74D2',
    inttravel: '#FA675D',
    intart: '#51EFE8',
  };

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        <div className={s.nav}>
          <div className={s.navWrapper}>
            <div className={s.brand} to="/">
              <img src={logoUrl} alt="Qubicle" />
            </div>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.contentsWrapper}>
            <div className={s.contentsTitle}>
              <h1>
                Almost there!{' '}
                <span role="img" aria-label="clapping hands">
                  👏
                </span>
              </h1>
              <h3>
                Choose one or more interests for your personalized contents.
              </h3>
            </div>
            <div className={s.selection}>
              <div className={s.selectionWrapper}>
                <div className={s.selectionItem}>
                  <div className={cx(s.selectionCard, s.selected)}>
                    <div
                      className={s.selectionOverlay}
                      style={{
                        backgroundColor: this.state.intmusic,
                      }}
                    />
                    <div
                      className={s.selectionImage}
                      style={{
                        backgroundImage: `url(${
                          story[50].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.selectionTitle}>
                      <span
                        style={{
                          color: this.state.intmusic,
                        }}
                      >
                        MUSIC
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.selectionItem}>
                  <div className={s.selectionCard}>
                    <div
                      className={s.selectionOverlay}
                      style={{
                        backgroundColor: this.state.intfood,
                      }}
                    />
                    <div
                      className={s.selectionImage}
                      style={{
                        backgroundImage: `url(${
                          story[60].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.selectionTitle}>
                      <span
                        style={{
                          color: this.state.intfood,
                        }}
                      >
                        FOOD
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.selectionItem}>
                  <div className={s.selectionCard}>
                    <div
                      className={s.selectionOverlay}
                      style={{
                        backgroundColor: this.state.intfashion,
                      }}
                    />
                    <div
                      className={s.selectionImage}
                      style={{
                        backgroundImage: `url(${
                          story[70].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.selectionTitle}>
                      <span
                        style={{
                          color: this.state.intfashion,
                        }}
                      >
                        FASHION
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.selectionItem}>
                  <div className={s.selectionCard}>
                    <div
                      className={s.selectionOverlay}
                      style={{
                        backgroundColor: this.state.intbeauty,
                      }}
                    />
                    <div
                      className={s.selectionImage}
                      style={{
                        backgroundImage: `url(${
                          story[80].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.selectionTitle}>
                      <span
                        style={{
                          color: this.state.intbeauty,
                        }}
                      >
                        BEAUTY
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.selectionItem}>
                  <div className={s.selectionCard}>
                    <div
                      className={s.selectionOverlay}
                      style={{
                        backgroundColor: this.state.inttravel,
                      }}
                    />
                    <div
                      className={s.selectionImage}
                      style={{
                        backgroundImage: `url(${
                          story[90].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.selectionTitle}>
                      <span
                        style={{
                          color: this.state.inttravel,
                        }}
                      >
                        TRAVEL
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.selectionItem}>
                  <div className={s.selectionCard}>
                    <div
                      className={s.selectionOverlay}
                      style={{
                        backgroundColor: this.state.intart,
                      }}
                    />
                    <div
                      className={s.selectionImage}
                      style={{
                        backgroundImage: `url(${
                          story[100].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.selectionTitle}>
                      <span
                        style={{
                          color: this.state.intart,
                        }}
                      >
                        ART
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={s.selectionButton} type="button" disabled>
              FINISH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SignUp);
