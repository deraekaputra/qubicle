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
import StickyBox from 'react-sticky-box';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tag.css';
import Link from '../../components/Link';

class Tag extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    intmusic: '#F8DB65',
    isEnd: false,
    isScroll: true,
    isNotFound: false,
    isContentLoading: false,
    contentLoading: false,
  };

  componentWillMount() {
    this.handleScroll = this.handleScroll.bind(this);
    this.showLoading = setTimeout(
      () => this.setState({ contentLoading: true }),
      3000,
    );
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.addEventListener('scroll', this.handleScroll);
    clearTimeout(this.showLoading);
  }

  handleScroll = () => {
    const isScroll = window.scrollY < 86;

    if (isScroll === !this.state.isScroll) {
      this.setState({
        isScroll,
      });
    }
  };

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div
              className={cx(s.tagHeader, this.state.isScroll ? '' : s.fixed)}
            >
              <div className={s.container}>
                <div className={s.tagHeaderWrapper}>
                  <h1 className={s.title}>Here&rsquo;s stories tagged in:</h1>
                  <div className={s.tagWrapper}>
                    <div className={s.indicator}>
                      <svg width="55" height="55">
                        <g fill="none" fillRule="evenodd">
                          <path fill="#F25A2B" d="M5 5h50v50H5z" />
                          <path fill="#0C0C17" d="M0 0h50v50H0z" />
                          <path
                            d="M16.248 32.497H10l.79-3.404h6.136l1.882-7.536h-6.324l.79-3.404h6.25L21.178 11h3.802l-1.618 7.153h6.512L31.53 11h3.764l-1.581 7.153H40v.038l-.753 3.366H33l-1.77 7.536h6.287l-.79 3.404h-6.174L29.046 39h-3.99l1.544-6.503h-6.437L18.695 39h-3.99l1.543-6.503zm11.03-3.404l1.881-7.536h-6.512l-1.806 7.536h6.436z"
                            fill="#FFFFFF"
                          />
                        </g>
                      </svg>
                    </div>
                    <h1 className={s.header}>pegawainegerisipil</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div className={s.row}>
                  <div className={s.fourCol}>
                    <StickyBox className={s.relatedTags} offset={192}>
                      <h3 className={s.relatedTagsTitle}>Related tags:</h3>
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
                        <Link className={s.tag} to="/">
                          cable
                        </Link>
                        <Link className={s.tag} to="/">
                          jack
                        </Link>
                      </div>
                    </StickyBox>
                  </div>
                  <div className={s.eightCol}>
                    {this.state.isNotFound ? (
                      <h3 className={s.notFound}>
                        We couldn&rsquo;t find stories related to this tag.
                      </h3>
                    ) : (
                      <div>
                        <div>
                          <h1 className={s.sectionTitle}>Trending</h1>
                          <div className={s.row}>
                            <div className={s.twelveCol}>
                              <div className={cx(s.card, s.trendingOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[39].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[39].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intmusic,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intmusic,
                                      }}
                                    >
                                      MUSIC
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intmusic,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[39].title}</Link>
                                    </h1>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[39].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[39].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h1 className={s.sectionTitle}>Latest</h1>
                          <div className={s.row}>
                            {range(6).map(i => (
                              <div className={s.sixCol} key={i}>
                                <div className={s.card}>
                                  <div className={s.cardImage}>
                                    <Link
                                      className={s.inner}
                                      to="/"
                                      style={{
                                        backgroundImage: `url(${
                                          story[i].post_image_thumb_url
                                        })`,
                                      }}
                                    >
                                      <div
                                        className={s.text}
                                        data-text={story[i].summary}
                                      />
                                      <div
                                        className={s.overlay}
                                        style={{
                                          backgroundColor: this.state.intmusic,
                                        }}
                                      />
                                    </Link>
                                    <div className={s.interestLabel}>
                                      <Link
                                        to="/"
                                        style={{
                                          color: this.state.intmusic,
                                        }}
                                      >
                                        MUSIC
                                      </Link>
                                    </div>
                                    <div className={s.readTime}>
                                      <span>8</span>
                                      <small
                                        style={{
                                          color: this.state.intmusic,
                                        }}
                                      >
                                        MIN
                                      </small>
                                    </div>
                                  </div>
                                  <div className={s.cardBody}>
                                    <div className={s.cardTitle}>
                                      <h1 className={s.title}>
                                        <Link to="/">{story[i].title}</Link>
                                      </h1>
                                    </div>
                                    <div className={s.cardMeta}>
                                      <div className={s.metaAvatar}>
                                        <div
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].userpost
                                                .user_image_profile_url
                                            })`,
                                          }}
                                        />
                                      </div>
                                      <div className={s.metaRight}>
                                        <span className={s.metaAuthor}>
                                          {story[i].userpost.user_fullname}
                                        </span>
                                        <span className={s.metaDate}>
                                          May 27, 2018
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          {this.state.isContentLoading ? (
                            <div className={s.row}>
                              {range(4).map(i => (
                                <div className={s.sixCol} key={i}>
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
                                            s.skeletonCardAvatar,
                                          )}
                                        />
                                        <div className={s.metaRight}>
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
                                              s.skeletonCardDate,
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                          {this.state.isContentLoading ? null : (
                            <div className={s.row}>
                              {this.state.isEnd ? (
                                <div className={s.end}>
                                  <h3>
                                    You&rsquo;re all caught up.{' '}
                                    <span role="img" aria-label="party popper">
                                      🎉
                                    </span>
                                  </h3>
                                </div>
                              ) : (
                                <button className={s.viewMore} type="button">
                                  VIEW MORE
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.tagHeader}>
              <div className={s.container}>
                <div className={s.tagHeaderWrapper}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonTitleOne,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonTitleTwo,
                    )}
                  />
                  <div className={s.tagWrapper}>
                    <div className={s.indicator}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonIndicator,
                        )}
                      />
                    </div>
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonPrimary,
                        s.skeletonHeaderTitle,
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div className={s.row}>
                  <div className={s.fourCol}>
                    <div className={s.relatedTags}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonSecondary,
                          s.skeletonRelatedTitle,
                        )}
                      />
                      <div className={s.tagWrapper}>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTagOne,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTagTwo,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTagThree,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTagFour,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonSecondary,
                            s.skeletonTagFive,
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={s.eightCol}>
                    <div>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonSecondary,
                          s.skeletonContentTitle,
                        )}
                      />
                      <div className={s.row}>
                        <div className={s.twelveCol}>
                          <div className={cx(s.card, s.trendingOne)}>
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
                                    s.skeletonCardAvatar,
                                  )}
                                />
                                <div className={s.metaRight}>
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Tag);
