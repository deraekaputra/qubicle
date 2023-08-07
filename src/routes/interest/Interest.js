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
import s from './Interest.css';
import Link from '../../components/Link';

class Interest extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    mainInterest: PropTypes.bool,
  };

  static defaultProps = {
    mainInterest: true,
  };

  state = {
    intmusic: '#F8DB65',
    isContentLoading: false,
    isEnd: false,
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
    const { story, mainInterest } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            {mainInterest ? (
              <div className={s.hero}>
                <div className={s.heroWrapper}>
                  <div
                    className={s.heroImage}
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1527031169734-cc605463fe17?ixlib=rb-0.3.5&s=e7aa86213928e0797be006a4faa5b505&auto=format&fit=crop&w=2550&q=80)`,
                    }}
                  />
                  <div className={s.heroTitle}>
                    <div className={s.container}>
                      <h1 className={s.title}>
                        <span>Music</span>
                      </h1>
                      <div className={s.hashtags}>
                        <div className={s.indicator}>
                          <svg width="55" height="55">
                            <g fill="none" fillRule="evenodd">
                              <path fill="#F8DB65" d="M5 5h50v50H5z" />
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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={s.hero}>
                <div className={s.heroTitle}>
                  <div className={s.container}>
                    <h1 className={s.title}>
                      <span>Music</span>
                    </h1>
                    <div className={s.hashtags}>
                      <div className={s.indicator}>
                        <svg width="55" height="55">
                          <g fill="none" fillRule="evenodd">
                            <path fill="#A5A5A5" d="M5 5h50v50H5z" />
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
                  </div>
                </div>
              </div>
            )}
            <div className={s.contents}>
              <div className={s.container}>
                <div
                  className={s.contentsBorder}
                  style={{
                    borderColor: this.state.intmusic,
                  }}
                />
                <div className={s.trending}>
                  <h1 className={s.sectionTitle}>Trending</h1>
                  <div className={s.row}>
                    {range(4).map(i => (
                      <div className={s.threeCol} key={i}>
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
                                style={{ backgroundColor: this.state.intmusic }}
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
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={s.feeds}>
                  <div className={s.row}>
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
                              style={{ backgroundColor: this.state.intmusic }}
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
                              <Link to="/">{story[14].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[14].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[14].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
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
                                story[52].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[52].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.intmusic }}
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
                              <Link to="/">{story[52].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[52].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[52].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {range(9).map(i => (
                      <div className={s.fourCol} key={i}>
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
                                style={{ backgroundColor: this.state.intmusic }}
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
                                      story[i].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[i].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {this.state.isContentLoading ? (
                    <div className={s.row}>
                      {range(2).map(i => (
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
                      ))}
                      {range(3).map(i => (
                        <div className={s.fourCol} key={i}>
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
                      ))}
                    </div>
                  ) : null}
                  {this.state.isContentLoading ? null : (
                    <div>
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
                        <button
                          className={s.viewMore}
                          type="button"
                          style={{
                            borderColor: this.state.intmusic,
                            color: this.state.intmusic,
                          }}
                        >
                          <span style={{ color: this.state.intmusic }}>
                            VIEW MORE
                          </span>
                          <i style={{ backgroundColor: this.state.intmusic }} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {mainInterest ? (
              <div className={s.hero}>
                <div className={s.heroWrapper}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonHeroImage,
                    )}
                  />
                  <div className={s.heroTitle}>
                    <div className={s.container}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonPrimary,
                          s.skeletonHeroTitle,
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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                  </div>
                </div>
              </div>
            )}
            <div className={s.contents}>
              <div className={s.container}>
                <div
                  className={cx(
                    s.skeleton,
                    s.skeletonPrimary,
                    s.skeletonContentsBorder,
                  )}
                />
                <div className={s.trending}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonSectionTitle,
                    )}
                  />
                  <div className={s.row}>
                    {range(4).map(i => (
                      <div className={s.threeCol} key={i}>
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
                    ))}
                  </div>
                </div>
                <div className={s.feeds}>
                  <div className={s.row}>
                    {range(2).map(i => (
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
                    ))}
                    {range(3).map(i => (
                      <div className={s.fourCol} key={i}>
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
                    ))}
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

export default withStyles(s)(Interest);
