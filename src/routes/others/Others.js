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
import range from 'lodash.range';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Others.css';
import Link from '../../components/Link';

class Interest extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    intzodiac: '#FB863B',
    intautomotive: '#D2843E',
    intinspirational: '#D0021B',
    intentertainment: '#9013FE',
    inttechnology: '#7ED321',
    contentLoading: false,
  };

  componentWillMount() {
    this.showLoading = setTimeout(
      () => this.setState({ contentLoading: true }),
      3000,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.showLoading);
  }

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div className={s.hero}>
              <div className={s.heroTitle}>
                <div className={s.container}>
                  <h1 className={s.title}>
                    <span>Others</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div className={s.contentsBorder} />
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Zodiac</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path fill={this.state.intzodiac} d="M5 5h50v50H5z" />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[29].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[29].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.intzodiac }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intzodiac,
                              }}
                            >
                              ZODIAC
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intzodiac,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[29].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[29].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[29].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[29].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[101].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[101].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[101].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[101].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[111].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[111].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[111].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[111].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[113].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[11].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[113].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[113].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[114].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[114].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[114].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[114].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Automotive</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intautomotive}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[69].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[69].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.intautomotive,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intautomotive,
                              }}
                            >
                              AUTOMOTIVE
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intautomotive,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[69].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[69].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[69].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[69].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[101].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[101].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[101].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[101].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[114].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[114].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[114].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[114].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[140].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[140].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[140].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[140].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[134].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[134].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[134].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[134].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Inspirational</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intinspirational}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[95].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[95].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.intinspirational,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intinspirational,
                              }}
                            >
                              INSPIRATIONAL
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intinspirational,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[95].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[95].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[95].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[95].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[110].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[110].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[110].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[110].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[111].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[111].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[111].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[111].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[5].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[5].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[5].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[5].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[6].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[6].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[6].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[6].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Entertainment</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intentertainment}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[9].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[9].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.intentertainment,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intentertainment,
                              }}
                            >
                              ENTERTAINMENT
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intentertainment,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[9].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[9].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[9].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[9].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[10].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[10].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[10].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[10].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[11].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[11].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[11].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[11].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[13].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[13].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[13].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[13].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[14].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[14].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[14].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[14].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Technology</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.inttechnology}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[9].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[9].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.inttechnology,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.inttechnology,
                              }}
                            >
                              TECHNOLOGY
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.inttechnology,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[9].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[9].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[9].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[9].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[10].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[10].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[10].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[10].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[11].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[11].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[11].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[11].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[13].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[13].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[13].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[13].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[14].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[14].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[14].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[14].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Zodiac</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path fill={this.state.intzodiac} d="M5 5h50v50H5z" />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[29].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[29].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.intzodiac }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intzodiac,
                              }}
                            >
                              ZODIAC
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intzodiac,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[29].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[29].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[29].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[29].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[101].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[101].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[101].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[101].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[111].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[111].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[111].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[111].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[113].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[11].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[113].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[113].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[114].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[114].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intzodiac,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  ZODIAC
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intzodiac,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[114].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[114].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Automotive</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intautomotive}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[69].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[69].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.intautomotive,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intautomotive,
                              }}
                            >
                              AUTOMOTIVE
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intautomotive,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[69].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[69].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[69].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[69].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[101].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[101].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[101].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[101].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[114].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[114].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[114].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[114].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[140].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[140].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[140].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[140].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[134].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[134].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.intautomotive,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  AUTOMOTIVE
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intautomotive,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[134].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[134].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Inspirational</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intinspirational}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[95].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[95].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.intinspirational,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intinspirational,
                              }}
                            >
                              INSPIRATIONAL
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intinspirational,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[95].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[95].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[95].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[95].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[110].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[110].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[110].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[110].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[111].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[111].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[111].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[111].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[5].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[5].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[5].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[5].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[6].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[6].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intinspirational,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  INSPIRATIONAL
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intinspirational,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[6].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[6].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Entertainment</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.intentertainment}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[9].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[9].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.intentertainment,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intentertainment,
                              }}
                            >
                              ENTERTAINMENT
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intentertainment,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[9].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[9].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[9].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[9].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[10].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[10].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[10].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[10].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[11].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[11].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[11].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[11].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[13].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[13].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[13].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[13].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[14].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[14].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state
                                      .intentertainment,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  ENTERTAINMENT
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.intentertainment,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[14].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[14].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.othersContents}>
                  <h1 className={s.sectionTitle}>
                    <Link to="/">Technology</Link>
                  </h1>
                  <div className={s.hashtags}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill={this.state.inttechnology}
                            d="M5 5h50v50H5z"
                          />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={s.tags}>
                      <div className={s.tagWrapper}>
                        <Link className={s.tag} to="/">
                          music
                        </Link>
                        <Link className={s.tag} to="/">
                          daily
                        </Link>
                        <Link className={s.tag} to="/">
                          life
                        </Link>
                        <Link className={s.tag} to="/">
                          exhibition
                        </Link>
                        <Link className={s.tag} to="/">
                          iphone
                        </Link>
                        <Link className={s.tag} to="/">
                          apple
                        </Link>
                        <Link className={s.tag} to="/">
                          android
                        </Link>
                        <Link className={s.tag} to="/">
                          drive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.fourCol}>
                      <div className={cx(s.card, s.othersOne)}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[9].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[9].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{
                                backgroundColor: this.state.inttechnology,
                              }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.inttechnology,
                              }}
                            >
                              TECHNOLOGY
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.inttechnology,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[9].title}</Link>
                            </h1>
                            <span className={s.summary}>
                              {story[9].summary}
                            </span>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[9].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[9].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.eightCol}>
                      <div className={s.row}>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[10].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[10].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[10].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[10].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[11].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[11].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[11].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[11].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[13].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[13].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[13].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[13].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.sixCol}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <Link
                                className={s.inner}
                                to="/"
                                style={{
                                  backgroundImage: `url(${
                                    story[14].post_image_thumb_url
                                  })`,
                                }}
                              >
                                <div
                                  className={s.text}
                                  data-text={story[14].summary}
                                />
                                <div
                                  className={s.overlay}
                                  style={{
                                    backgroundColor: this.state.inttechnology,
                                  }}
                                />
                              </Link>
                              <div className={s.interestLabel}>
                                <Link
                                  to="/"
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  TECHNOLOGY
                                </Link>
                              </div>
                              <div className={s.readTime}>
                                <span>8</span>
                                <small
                                  style={{
                                    color: this.state.inttechnology,
                                  }}
                                >
                                  MIN
                                </small>
                              </div>
                            </div>
                            <div className={s.cardBody}>
                              <div className={s.cardTitle}>
                                <h1 className={s.title}>
                                  <Link to="/">{story[14].title}</Link>
                                </h1>
                              </div>
                              <div className={s.cardMeta}>
                                <span className={s.metaAuthor}>
                                  {story[14].userpost.user_fullname}
                                </span>
                                <span className={s.metaDivider} />
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.end}>
              <h3>
                You&rsquo;re all caught up.{' '}
                <span role="img" aria-label="party popper">
                  🎉
                </span>
              </h3>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.hero}>
              <div className={s.heroTitle}>
                <div className={s.container}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonPrimary,
                      s.skeletonHeroTitle,
                    )}
                  />
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div
                  className={cx(
                    s.skeleton,
                    s.skeletonPrimary,
                    s.skeletonContentsBorder,
                  )}
                />
                {range(2).map(i => (
                  <div className={s.othersContents} key={i}>
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonSectionTitle,
                      )}
                    />
                    <div className={s.hashtags}>
                      <div className={s.indicator}>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonIndicator,
                          )}
                        />
                      </div>
                      <div className={s.tags}>
                        <div className={s.tagWrapper}>
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagFirst,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagSecond,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagThird,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagFourth,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagFifth,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagSixth,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagSeventh,
                            )}
                          />
                          <div
                            className={cx(
                              s.skeleton,
                              s.skeletonPrimary,
                              s.skeletonTagEighth,
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.othersOne)}>
                          <div className={s.cardImage}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonPrimary,
                                s.skeletonCardImage,
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardInterestLabel,
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardReadTime,
                              )}
                            />
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.cardTitle}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardTitleFirst,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardTitleSecond,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardSummaryFirst,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardSummarySecond,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardSummaryThird,
                                )}
                              />
                            </div>
                            <div className={s.cardMeta}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardAvatar,
                                )}
                              />
                              <div className={s.metaRight}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardMetaAuthor,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardDate,
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonPrimary,
                                    s.skeletonCardImage,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardInterestLabel,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardReadTime,
                                  )}
                                />
                              </div>
                              <div className={s.cardBody}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleFirst,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleSecond,
                                  )}
                                />
                                <div className={s.cardMeta}>
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardAuthor,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDivider,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDate,
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonPrimary,
                                    s.skeletonCardImage,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardInterestLabel,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardReadTime,
                                  )}
                                />
                              </div>
                              <div className={s.cardBody}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleFirst,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleSecond,
                                  )}
                                />
                                <div className={s.cardMeta}>
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardAuthor,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDivider,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDate,
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonPrimary,
                                    s.skeletonCardImage,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardInterestLabel,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardReadTime,
                                  )}
                                />
                              </div>
                              <div className={s.cardBody}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleFirst,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleSecond,
                                  )}
                                />
                                <div className={s.cardMeta}>
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardAuthor,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDivider,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDate,
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonPrimary,
                                    s.skeletonCardImage,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardInterestLabel,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardReadTime,
                                  )}
                                />
                              </div>
                              <div className={s.cardBody}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleFirst,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardTitleSecond,
                                  )}
                                />
                                <div className={s.cardMeta}>
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardAuthor,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDivider,
                                    )}
                                  />
                                  <div
                                    className={cx(
                                      s.skeleton,
                                      s.skeletonSecondary,
                                      s.skeletonCardDate,
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Interest);
